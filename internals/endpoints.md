# Discord Internal Endpoints
Harvested through the client's API.

## How'd I Get These?

1) [Paste the `getModule` fn](https://github.com/13-05/hidden-disc-docs/#global-function-to-find-a-requested-module)
2) Paste the following:
```js
e = [];
for (let arrObj in Object.values(getModule("Endpoints").Endpoints).filter(arrObj => typeof arrObj === "string")) {
    e.push(`https:${window.GLOBAL_ENV.API_ENDPOINT }/v${window.GLOBAL_ENV.API_VERSION }${Object.values(getModule("Endpoints").Endpoints).filter(arrObj=>typeof arrObj==="string")[arrObj]}`)
};
console.log(e);
```
3) ...
4) Profit!

In all seriousness, the first two steps are all you need to get [the endpoints list](https://github.com/13-05/hidden-disc-docs/blob/main/internals/endpoints.md#the-actual-endpoints).

Also, if you want an efficient way to go through the endpoints, here's a function to get you going (requires the [`getModule()`](https://github.com/13-05/hidden-disc-docs/#global-function-to-find-a-requested-module) snippet):
```js
function findEndpointWith(e) {
    d = {};
    Object.values(getModule("Endpoints").Endpoints).filter(f => typeof f === "string").filter(j => j.toLowerCase().includes(e.toLowerCase())).forEach(i => d[Object.keys(getModule("Endpoints").Endpoints).find(k => getModule("Endpoints").Endpoints[k] === i)] = `https:${window.GLOBAL_ENV.API_ENDPOINT}/v${window.GLOBAL_ENV.API_VERSION}${i}`);
    return d;
}
```

This lets you search for general terms (ex: `findEndpointWith("phone")`), and the related endpoints will be shown to you in the return value, as seen below.

![image](https://user-images.githubusercontent.com/64506392/166344393-107c10a0-2583-43ee-842f-72a14834d39e.png)

For whatever reason, it may cause your browser to "hang"/freeze for a second whilst searching, but after it finishes, you should be good.

## The Actual Endpoints

```js
[
  "https://discord.com/api/v9/users/@me/relationships/bulk",
  "https://discord.com/api/v9/users/@me/channels",
  "https://discord.com/api/v9/users/@me/activities/statistics/applications",
  "https://discord.com/api/v9/activities",
  "https://discord.com/api/v9/lobbies",
  "https://discord.com/api/v9/lobbies/search",
  "https://discord.com/api/v9/networking/token",
  "https://discord.com/api/v9/users/@me/settings/game-notifications",
  "https://discord.com/api/v9/users/@me/settings/game-notifications/overrides",
  "https://discord.com/api/v9/unverified-applications",
  "https://discord.com/api/v9/unverified-applications/icons",
  "https://discord.com/api/v9/read-states/ack-bulk",
  "https://discord.com/api/v9/users/@me/join-request-guilds",
  "https://discord.com/api/v9/guilds",
  "https://discord.com/api/v9/channels",
  "https://discord.com/api/v9/friend-suggestions",
  "https://discord.com/api/v9/tutorial/indicators",
  "https://discord.com/api/v9/tutorial/indicators/suppress",
  "https://discord.com/api/v9/users",
  "https://discord.com/api/v9/users/@me",
  "https://discord.com/api/v9/users/@me/delete",
  "https://discord.com/api/v9/users/@me/disable",
  "https://discord.com/api/v9/users/@me/devices",
  "https://discord.com/api/v9/users/@me/settings",
  "https://discord.com/api/v9/users/@me/consent",
  "https://discord.com/api/v9/users/@me/phone",
  "https://discord.com/api/v9/users/@me/phone/verify",
  "https://discord.com/api/v9/users/@me/invites",
  "https://discord.com/api/v9/phone-verifications/verify",
  "https://discord.com/api/v9/phone-verifications/validate-support-ticket",
  "https://discord.com/api/v9/phone-verifications/resend",
  "https://discord.com/api/v9/users/@me/connections",
  "https://discord.com/api/v9/users/@me/connections/contacts/@me/external-friend-list-entries",
  "https://discord.com/api/v9/users/@me/connections/contacts/@me/external-friend-list-entries/settings",
  "https://discord.com/api/v9/users/@me/notes",
  "https://discord.com/api/v9/users/@me/mentions",
  "https://discord.com/api/v9/users/@me/captcha/verify",
  "https://discord.com/api/v9/experiments",
  "https://discord.com/api/v9/auth/login",
  "https://discord.com/api/v9/auth/mfa/totp",
  "https://discord.com/api/v9/auth/mfa/sms",
  "https://discord.com/api/v9/auth/mfa/sms/send",
  "https://discord.com/api/v9/users/@me/remote-auth",
  "https://discord.com/api/v9/users/@me/remote-auth/cancel",
  "https://discord.com/api/v9/users/@me/remote-auth/finish",
  "https://discord.com/api/v9/auth/logout",
  "https://discord.com/api/v9/auth/register",
  "https://discord.com/api/v9/auth/register/phone",
  "https://discord.com/api/v9/science",
  "https://discord.com/api/v9/sso",
  "https://discord.com/api/v9/auth/verify",
  "https://discord.com/api/v9/auth/authorize-ip",
  "https://discord.com/api/v9/billing/verify-purchase-request",
  "https://discord.com/api/v9/auth/verify/resend",
  "https://discord.com/api/v9/auth/forgot",
  "https://discord.com/api/v9/auth/reset",
  "https://discord.com/api/v9/report",
  "https://discord.com/api/v9/reports",
  "https://discord.com/api/v9/report/options",
  "https://discord.com/api/v9/integrations",
  "https://discord.com/api/v9/applications/detectable",
  "https://discord.com/api/v9/oauth2/authorize",
  "https://discord.com/api/v9/oauth2/authorize/webhook-channels",
  "https://discord.com/api/v9/oauth2/@me",
  "https://discord.com/api/v9/oauth2/tokens",
  "https://discord.com/api/v9/oauth2/allowlist/accept",
  "https://discord.com/api/v9/users/@me/mfa/totp/enable",
  "https://discord.com/api/v9/users/@me/mfa/totp/disable",
  "https://discord.com/api/v9/users/@me/mfa/sms/enable",
  "https://discord.com/api/v9/users/@me/mfa/sms/disable",
  "https://discord.com/api/v9/users/@me/mfa/codes",
  "https://discord.com/api/v9/users/@me/mfa/codes-verification",
  "https://discord.com/api/v9/auth/verify/view-backup-codes-challenge",
  "https://discord.com/api/v9/users/disable-email-notifications",
  "https://discord.com/api/v9/users/@me/guilds/premium/subscriptions/cooldown",
  "https://discord.com/api/v9/users/@me/guilds/premium/subscriptions",
  "https://discord.com/api/v9/users/@me/guilds/premium/subscription-slots",
  "https://discord.com/api/v9/users/@me/billing/stripe/setup-intents",
  "https://discord.com/api/v9/users/@me/billing/payment-sources",
  "https://discord.com/api/v9/users/@me/billing/payment-sources/validate-billing-address",
  "https://discord.com/api/v9/users/@me/billing/payments",
  "https://discord.com/api/v9/users/@me/billing/paypal/billing-agreement-tokens",
  "https://discord.com/api/v9/users/@me/billing/subscriptions",
  "https://discord.com/api/v9/users/@me/billing/subscriptions/preview",
  "https://discord.com/api/v9/billing/apple/apply-receipt",
  "https://discord.com/api/v9/users/@me/billing/country-code",
  "https://discord.com/api/v9/google-play/verify-purchase-token",
  "https://discord.com/api/v9/google-play/downgrade-subscription",
  "https://discord.com/api/v9/users/@me/agreements",
  "https://discord.com/api/v9/auth/handoff",
  "https://discord.com/api/v9/auth/handoff/exchange",
  "https://discord.com/api/v9/users/@me/library",
  "https://discord.com/api/v9/auth/location-metadata",
  "https://discord.com/api/v9/users/@me/harvest",
  "https://discord.com/api/v9/branches",
  "https://discord.com/api/v9/applications/public",
  "https://discord.com/api/v9/applications/trending/global",
  "https://discord.com/api/v9/store/published-listings/applications",
  "https://discord.com/api/v9/store/published-listings/skus",
  "https://discord.com/api/v9/users/@me/entitlements/gifts",
  "https://discord.com/api/v9/hypesquad/online",
  "https://discord.com/api/v9/gifs/search",
  "https://discord.com/api/v9/gifs/trending",
  "https://discord.com/api/v9/gifs/trending-gifs",
  "https://discord.com/api/v9/gifs/select",
  "https://discord.com/api/v9/gifs/suggest",
  "https://discord.com/api/v9/gifs/trending-search",
  "https://discord.com/api/v9/users/@me/entitlements/gift-codes",
  "https://discord.com/api/v9/users/@me/entitlements/gift-codes",
  "https://discord.com/api/v9/users/@me/billing/user-trial-offer",
  "https://discord.com/api/v9/discoverable-guilds",
  "https://discord.com/api/v9/discovery/categories",
  "https://discord.com/api/v9/discovery/valid-term",
  "https://discord.com/api/v9/users/@me/affinities/users",
  "https://discord.com/api/v9/users/@me/affinities/guilds",
  "https://discord.com/api/v9/promotions/funimation",
  "https://discord.com/api/v9/partners/connections",
  "https://discord.com/api/v9/partners/apply",
  "https://discord.com/api/v9/users/@me/sticker-packs",
  "https://discord.com/api/v9/sticker-packs",
  "https://discord.com/api/v9/interactions",
  "https://discord.com/api/v9/stage-instances",
  "https://discord.com/api/v9/stage-instances/extra",
  "https://discord.com/api/v9/users/@me/survey",
  "https://discord.com/api/v9/guild-events",
  "https://discord.com/api/v9/users/@me/scheduled-events",
  "https://discord.com/api/v9/store/price-tiers",
  "https://discord.com/api/v9/teams",
  "https://discord.com/api/v9/applications",
  "https://discord.com/api/v9/hub-waitlist/signup",
  "https://discord.com/api/v9/guilds/automations/email-domain-lookup/verify",
  "https://discord.com/api/v9/guilds/automations/email-domain-lookup/verify-code",
  "https://discord.com/api/v9/outbound-promotions",
  "https://discord.com/api/v9/outbound-promotions/preview",
  "https://discord.com/api/v9/users/@me/outbound-promotions/codes",
  "https://discord.com/api/v9/guilds/automations/email-domain-lookup",
  "https://discord.com/api/v9/private/bug-reports",
  "https://discord.com/api/v9/tenor",
  "https://discord.com/api/v9/users/@me/email-settings",
  "https://discord.com/api/v9/users/@me/video-filters/assets",
  "https://discord.com/api/v9/application-directory/categories",
  "https://discord.com/api/v9/application-directory/applications/recommended",
  "https://discord.com/api/v9/application-directory/applications",
  "https://discord.com/api/v9/users/@me/email",
  "https://discord.com/api/v9/users/@me/email/verify-code",
  "https://discord.com/api/v9/users/@me/premium-usage"
]
```
