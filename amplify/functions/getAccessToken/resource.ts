import { defineFunction } from '@aws-amplify/backend';

export const getAccessToken = defineFunction({
    name:'getAccessToken',
    entry:'./handler.ts',
    // ! for dev
    environment:{
        REFRESH_TOKEN: 'Atzr|IwEBIFyjs8ZqVxsWA1lw2sYz35Dz2RoENPY4FLTLKx_d8bL6u_inifSn4fw2PuJx2QQN1Tp2VB-hPjfRT0SA9Ob5PNWkOiXr03AC_J-kZt9TMaLZWILuYBKPi-CayruEUL92EHDoHjpfrYbmWleccU1Aw3q8GSOXFHTCphnasCnRDSWxr2bn0b9WDW7wTTglNNHO4i4bxGPFVs0TaIbG5AfUOoKaaakaNLm2mlDrV7nGvlbpXE8BHVaNoDOIBj9hjG_8AGoC2fUX36eAguXDqpkiDh56WUu0pFUGD8QRgXF9UCVOBBJBDpqfKiNTNQDnp7L6n4U',
        LWA_APP_ID: 'amzn1.application-oa2-client.85380e3cd0414a08b6170ef09176183c',
        LWA_CLIENT_SECRET: 'amzn1.oa2-cs.v1.3f0ebaaf5489d6a534bf9bdb7e6ac1a43f0511dbb964b06fc646f325ab30e4b4',
        BASE_URL:'https://api.amazon.com/auth/o2/token',
    }
})