import { customElement } from "aurelia";
import { Card } from "./components/Card/card";

export class MyApp {
  cards = [
    {
        header: 'Заголовок 1',
        description: 'Описание'
    },
    {
        header: 'Заголовок 2',
        description: 'Длинное описание'
    },
    {
        header: 'Заголовок 3',
        description: 'Очень длинное описание'
    },
    {
        header: 'Заголовок 4',
        description: 'Очень оооочень длинное описание'
    }
  ];
}
