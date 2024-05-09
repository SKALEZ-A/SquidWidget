
"use client"
import { SquidWidget } from "@0xsquid/widget";

const SquidModal = () => {
    <>
<SquidWidget config={
{
    "integratorId": "marble-protocol-354e844c-17aa-4dca-abfe-45b032bfa636",
    "companyName": "Custom",
    "style": {
        "neutralContent": "#9DA7B1",
        "baseContent": "#FFFDFD",
        "base100": "#434565",
        "base200": "#202230",
        "base300": "#161522",
        "error": "#ED6A5E",
        "warning": "#FFB155",
        "success": "#2EAEB0",
        "primary": "#AB67CB",
        "secondary": "#37394C",
        "secondaryContent": "#B2BCD3",
        "neutral": "#383A4C",
        "roundedBtn": "24px",
        "roundedCornerBtn": "999px",
        "roundedBox": "20px",
        "roundedDropDown": "15px"
    },
    "slippage": 1.5,
    "infiniteApproval": false,
    "enableExpress": true,
    "apiUrl": "https://api.squidrouter.com",
    "mainLogoUrl": "https://marble-dex.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FM-logo-ico.7a5192fc.png&w=64&q=75",
    "comingSoonChainIds": [],
    "titles": {
        "swap": "Swap",
        "settings": "Settings",
        "wallets": "Wallets",
        "tokens": "Select Token",
        "chains": "Select Chain",
        "history": "History",
        "transaction": "Transaction",
        "allTokens": "Select Token",
        "destination": "Destination address",
        "depositAddress": "Deposit address"
    },
    "priceImpactWarnings": {
        "warning": 3,
        "critical": 5
    },
    "environment": "mainnet",
    "showOnRampLink": true,
    "defaultTokens": [],
    "preferDex": [
        ""
    ]
}
} />
    </>
}

export default SquidModal