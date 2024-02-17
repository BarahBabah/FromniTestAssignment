import { useEffect, useState } from 'react';
import ChannelSettingsForm from '../component/ChannelSettingsForm/ChannelSettingsForm';
import './ChannelPage.css';
import { loadSettings } from '../utils/api';
const ChannelPage = () => {
    const [settings, setSettings] = useState([]);
    useEffect(() => {
        const fetchSettingsData = async () => {
            try {
                const settings = await loadSettings();
                setSettings(settings);
                console.log(settings);
            } catch (error) {
                console.error('Error fetching settings:', error);
            }
        };

        fetchSettingsData();
    }, []);
    return (
        <div className="page">
            <h1>Fromni</h1>
            <p className="paragraph">
                Приложение Fromni позволяет пользователям инициировать общение
                со&nbsp;своими клиентами, отправляя Кампании в&nbsp;различные
                мессенджеры и&nbsp;социальные сети. Для этого пользователю
                необходимо указать каналы отправки и&nbsp;их&nbsp;порядок
                и&nbsp;настроить сообщение для каждого из&nbsp;них. Помимо
                текста в&nbsp;некоторых каналах сообщение может содержать
                клавиатуру с&nbsp;кнопками, позволяющими выбрать один
                из&nbsp;быстрых ответов или перейти на&nbsp;сторонний веб-сайт.
            </p>
            <ChannelSettingsForm
                settings={settings}
                setSettings={setSettings}
            />
        </div>
    );
};

export default ChannelPage;
