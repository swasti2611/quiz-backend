// // const express = require('express');
// // const { chromium } = require('playwright');
// // const axios = require('axios');
// // const cors = require('cors');

// // // Your Discord Webhook URL
// // const webhookUrl = " https://discordapp.com/api/webhooks/1342015901578297384/C9AyKCf4pVaCVqHhp7r4vUW_psufkLucpMZusB07jMxTMYkLJ_vs-T3Rn_qs5EEtKQ1w";

// // // Track ad requests count
// // let adRequestCount = 0;
// // let browser, page, context;

// // // Create an Express server
// // const app = express();
// // const port = 8000;  // You can change the port if needed
// // app.use(cors({
// //     origin: 'http://localhost:3000',
// // }));

// // // Route to start the ad check
// // app.get('/check-ads', async (req, res) => {
// //     try {
// //         console.log("🚀 Starting ad check...");
// //         adRequestCount = 0; // Reset counter before each run

// //         // Run the Playwright browser logic
// //         await initBrowser();

// //         // Check if ad requests are less than 1 and send notification if true
// //         sendAdNotification();

// //         // Respond to the user
// //         res.send(`Ad check completed. Total Ad Requests: ${adRequestCount}`);
// //     } catch (error) {
// //         console.error("Error during ad check:", error);
// //         res.status(500).send("An error occurred while performing the ad check.");
// //     }
// // });



// // // Initialize Playwright Browser and Intercept Ads
// // async function initBrowser() {
// //     if (!browser) {
// //         browser = await chromium.launch({ headless: true });
// //         context = await browser.newContext();
// //         page = await context.newPage();

// //         console.log("🌐 Navigating to page for the first time...");
// //         await page.goto("http://localhost:3000/", { waitUntil: 'networkidle' }); // Replace with the page URL you want to test
// //         console.log("✅ Page Loaded.");
// //     }

// //     // Listen to requests to check if they are ads
// //     page.on('request', request => {
// //         const url = request.url();
// //         if (url.includes('ads?')) {
// //             adRequestCount++; // Increment counter
// //             console.log(`📡 Ad Request #${adRequestCount}: ${url}`);
// //         }
// //     });
// // }


// // // Function to send notification if ad requests are less than 1  
// // function sendAdNotification() {
// //     if (adRequestCount < 1) {
// //         const message = "🚨 **Playwright Test Alert** 🚨\n❗ No ad requests were found during the test!";
// //         axios.post(webhookUrl, { content: message })
// //             .then(response => {
// //                 console.log("Notification sent to Discord:", response.status);
// //             })
// //             .catch(error => {
// //                 console.error("Error sending notification to Discord:", error);
// //             });
// //     } else {
// //         console.log(`✅ Found ${adRequestCount} ad requests, no notification needed.`);
// //     }
// // }

// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });

// const express = require('express');
// const { chromium } = require('playwright');
// const axios = require('axios');
// const cors = require('cors');

// // Your Discord Webhook URL
// const webhookUrl = " https://discordapp.com/api/webhooks/1342015901578297384/C9AyKCf4pVaCVqHhp7r4vUW_psufkLucpMZusB07jMxTMYkLJ_vs-T3Rn_qs5EEtKQ1w";

// // Track ad requests count
// let adRequestCount = 0;
// let browser, page, context;

// // Create an Express server
// const app = express();
// const port = 8000;  // You can change the port if needed
// app.use(cors({
//     origin: 'http://localhost:3000',
// }));

// // Route to start the ad check
// app.get('/check-ads', async (req, res) => {
//     try {
//         console.log("🚀 Starting ad check...");
//         adRequestCount = 0; // Reset counter before each run

//         // Run the Playwright browser logic
//         await initBrowser();

//         // Check if ad requests are less than 1 and send notification if true
//         sendAdNotification();

//         // Respond to the user
//         res.send(`Ad check completed. Total Ad Requests: ${adRequestCount}`);
//     } catch (error) {
//         console.error("Error during ad check:", error);
//         res.status(500).send("An error occurred while performing the ad check.");
//     }
// });

// // Initialize Playwright Browser and Intercept Ads
// async function initBrowser() {
//     if (!browser) {
//         browser = await chromium.launch({ headless: true });
//         context = await browser.newContext();
//         page = await context.newPage();

//         console.log("🌐 Navigating to page for the first time...");
//         await page.goto("http://localhost:3000/", { waitUntil: 'networkidle' }); // Replace with the page URL you want to test
//         console.log("✅ Page Loaded.");
//     }

//     // Ensure the event listener is only added once
//     if (!page._adListenerAdded) {
//         page.on('request', request => {
//             const url = request.url();
//             if (url.includes('ads?')) {
//                 adRequestCount++; // Increment counter
//                 console.log(`📡 Ad Request #${adRequestCount}: ${url}`);
//             }
//         });
//         page._adListenerAdded = true; // Prevent adding duplicate listeners
//     }
// }

// // Function to send notification if ad requests are less than 1  
// function sendAdNotification() {
//     if (adRequestCount < 1) {
//         const message = "🚨 **Playwright Test Alert** 🚨\n❗ No ad requests were found during the test!";
//         axios.post(webhookUrl, { content: message })
//             .then(response => {
//                 console.log("Notification sent to Discord:", response.status);
//             })
//             .catch(error => {
//                 console.error("Error sending notification to Discord:", error);
//             });
//     } else {
//         console.log(`✅ Found ${adRequestCount} ad requests, no notification needed.`);
//     }
// }

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 8000;

// 🔹 Discord Webhook for Notifications
const webhookUrl = "https://discordapp.com/api/webhooks/1342015901578297384/C9AyKCf4pVaCVqHhp7r4vUW_psufkLucpMZusB07jMxTMYkLJ_vs-T3Rn_qs5EEtKQ1w";

// 🔹 Allow frontend requests
app.use(cors({ origin: 'http://localhost:3000' }));

// 🔹 API Route to Check Ads
app.get('/check-ads', async (req, res) => {
    try {
        console.log("🚀 Checking for ads...");

        // 🔹 Make request to the webpage where ads should be loaded
        const response = await axios.get('http://localhost:3000/', { timeout: 10000 });
                 
                  
        // 🔹 Check if the response contains ads (Modify the keyword as needed)
        if (response.data.includes('ads?') ) {
            console.log("✅ Ads Found!");
            res.send("✅ Ads are present on the page.");
        } else {
            console.log("❌ No Ads Found!");
            sendAdNotification();
            res.send("❌ No ads detected on the page.");
        }
    } catch (error) {
        console.error("❌ Error:", error.message);
        res.status(500).send("Error checking for ads.");
    }
});

app.get('/check-ads-btn', async (req, res) => {
    console.log("📡 /check-ads-btn API hit!"); // Check if it's being called

    try {
        const response = await axios.get('http://localhost:3000/', { timeout: 10000 });
        console.log("📝 Response received from frontend.");

        if (response.data.includes('ads?')) {
            console.log("✅ Ads Found!");
            res.send("✅ Ads are present on the page.");
        } else {
            console.log("❌ No Ads Found!");
            sendAdNotification();
            res.send("❌ No ads detected on the page.");
        }
    } catch (error) {
        console.error("❌ Error:", error.message);
        res.status(500).send("Error checking for ads.");
    }
});


app.get('/check-ads-PLAY-BTN', async (req, res) => {
    console.log("📡 /check-ads-PLAY-BTN API hit!"); // Check if it's being called

    try {
        const response = await axios.get('http://localhost:3000/', { timeout: 10000 });
        console.log("📝 Response received from frontend.");

        if (response.data.includes('ads?')) {
            console.log("✅ Ads Found!");
            res.send("✅ Ads are present on the page.");
        } else {
            console.log("❌ No Ads Found!");
            sendAdNotification();
            res.send("❌ No ads detected on the page.");
        }
    } catch (error) {
        console.error("❌ Error:", error.message);
        res.status(500).send("Error checking for ads.");
    }
});
// 🔹 Send Notification to Discord if No Ads Found
function sendAdNotification() {
    const message = "🚨 **Ad Check Alert** 🚨\n❗ No ads were detected on the page!";
    axios.post(webhookUrl, { content: message })
        .then(response => console.log("📢 Notification sent to Discord"))
        .catch(error => console.error("❌ Error sending notification:", error));
}

// 🔹 Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
