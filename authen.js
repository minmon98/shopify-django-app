import createApp from '@shopify/app-bridge';
import {Redirect} from '@shopify/app-bridge/actions';

const apiKey = 'fa0170cc042e3e2888092b7e79024df9';
const redirectUri = 'https://9a61c382.ngrok.io/home';
const permissionUrl = `/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;

export default function installShopify(shopOrigin) {
    // If the current window is the 'parent', change the URL by setting location.href
    if (window.top == window.self) {
        window.location.assign(`https://${shopOrigin}/admin${permissionUrl}`)
    
    // If the current window is the 'child', change the parent's URL with Shopify App Bridge's Redirect action
    } else {
        const app = createApp({
        apiKey: apiKey,
        shopOrigin: shopOrigin,
        });
    
        Redirect.create(app).dispatch(Redirect.Action.ADMIN_PATH, permissionUrl);
    }
}