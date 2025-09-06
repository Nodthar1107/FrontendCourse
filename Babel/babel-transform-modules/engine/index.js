// Скрипт сборки приложения

const path = require('path');

if (process.argv.length < 3) {
    throw new Error('Ожидаются аргументы командной строк: путь к файлу с конфигурацией');
}

const configPath = process.argv[2];

const projectRoot = path.resolve(__dirname, '..');

const config = require(path.resolve(projectRoot, configPath));

const plugins = config.plugins.map((pluginPath) => require(path.resolve(projectRoot, pluginPath)));

const options = {
    environment: 'dev',
    engineVersion: '1.0.0'
};

plugins.forEach((plugin) => plugin(options));
