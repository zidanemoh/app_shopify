const express = require('express');
const { Shopify } = require('@shopify/shopify-api');

const router = express.Router();

// المسار لبدء عملية المصادقة
router.get('/shopify', async (req, res) => {
  const shop = req.query.shop;
  if (!shop) {
    return res.status(400).send('Shop is required');
  }

  const authRoute = await Shopify.Auth.beginAuth(
    req,
    res,
    shop,
    '/auth/callback',
    false
  );
  return res.redirect(authRoute);
});

// المسار لرد Shopify بعد المصادقة
router.get('/auth/callback', async (req, res) => {
  try {
    const session = await Shopify.Auth.validateAuthCallback(req, res, req.query);
    res.redirect('/');  // بعد المصادقة، يعود المستخدم إلى الصفحة الرئيسية
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during authentication');
  }
});

module.exports = router;
