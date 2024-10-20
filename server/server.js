require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { Shopify } = require('@shopify/shopify-api');

const app = express();
const port = process.env.PORT || 5000;

// إعداد بيانات Shopify من ملف .env
const SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;
const SHOPIFY_API_SECRET = process.env.SHOPIFY_API_SECRET;
const SHOPIFY_STORE_URL = process.env.SHOPIFY_STORE_URL;
const SHOPIFY_ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN;

app.use(express.json());

// التحقق من أن الخادم يعمل
app.get('/', (req, res) => {
  res.send('Server is running');
});

// مسار لمعالجة الاشتراك
app.post('/subscribe', async (req, res) => {
  try {
    const { plan } = req.body;

    // مثال طلب لإضافة اشتراك جديد (هنا يمكنك تعديل الطلب بناءً على متطلباتك)
    const response = await axios.post(
      `${SHOPIFY_STORE_URL}/admin/api/2024-01/recurring_application_charges.json`,
      {
        recurring_application_charge: {
          name: `${plan} Plan`,
          price: plan === 'Starter' ? 9.99 : 24.99,
          return_url: `${SHOPIFY_STORE_URL}/admin`,
          test: true, // اجعلها false إذا كنت تريد تفعيل الاشتراكات الحقيقية
        },
      },
      {
        headers: {
          'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN,
        },
      }
    );

    res.json({
      message: `Subscription for the ${plan} plan has been created.`,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the subscription.' });
  }
});

// بدء الخادم
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
