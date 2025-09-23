require.config({
    // Задаем директорию, где лежат скрипты
    baseUrl: '../src/modules',
    paths: {
        // можно задаить алиас для каких-то модулей или директорий
        module3: 'utils/module3'
        // alias: 'path/to/dir' -> путь к директории, где лежат другие модули
        // при объявлении и подключении конкретного модуля по этому
        // алиасу -> 'alias/someModule'
    }
});

require(['module1', 'module2', 'module3'], (module1, module2, module3) => {
    module1.foo()

    console.log(module1.sum(1, 2));

    module2.sumWithLogs(1, 2)

    module3.foo();
});
