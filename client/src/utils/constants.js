import VKontakte from './../assets/VK.svg';
import Telegram from './../assets/telegram.svg';
import WhatsApp from './../assets/whatsapp.svg';
import SMS from './../assets/sms.svg';

export const BASE_URL = 'http://127.0.0.1:5000';


export const channels = [
    {
        name: 'VKontakte',
        image: VKontakte,
        maxChars: 4096,
        standardKeyboardMaxButtons: 40,
        inlineKeyboardMaxButtons: 10,
        inlineKeyboardMaxTextLength: 20,
        buttonSupports: {
            standard: {
                maxButtonsCount: 40,
                maxButtonTitleLength: null,
                linkButtonsSupport: true,
                linkButtonsCountMax: Infinity,
            },
            inline: {
                maxButtonsCount: 10,
                maxButtonTitleLength: null,
                linkButtonsSupport: true,
                linkButtonsCountMax: Infinity,
            }
        },


    },
    {
        name: 'Telegram',
        image: Telegram,
        maxChars: 4096,
        standardKeyboardMaxButtons: Infinity,
        inlineKeyboardMaxButtons: Infinity,
        inlineKeyboardMaxTextLength: 64,
        buttonSupports: {
            standard: {
                maxButtonsCount: Infinity,
                maxButtonTitleLength: null,
                linkButtonsSupport: false
            },
            inline: {
                maxButtonsCount: Infinity,
                maxButtonTitleLength: 64,
                linkButtonsSupport: true,
                linkButtonsCountMax: Infinity,

            }
        },



    },
    {
        name: 'WhatsApp',
        image: WhatsApp,
        maxChars: 1000,
        standardKeyboardMaxButtons: 10,
        inlineKeyboardMaxButtons: 3,
        inlineKeyboardMaxTextLength: 20,
        buttonSupports: {
            standard: {
                maxButtonsCount: 10,
                maxButtonTitleLength: 20,
                linkButtonsSupport: false
            },
            inline: {
                maxButtonsCount: 3,
                maxButtonTitleLength: 20,
                linkButtonsSupport: true,
                linkButtonsCountMax: 1,
            }
        },

    },
    {
        name: 'SMS',
        image: SMS,
        maxChars: Infinity,
        standardKeyboardMaxButtons: null,
        inlineKeyboardMaxButtons: null,
        inlineKeyboardMaxTextLength: null,
        buttonSupports: null
    },

];
