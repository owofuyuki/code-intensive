import { createContext } from 'react';

const ThemeContext = createContext({ theme: "light "});

export default ThemeContext;

/*
    - Context: Kho dữ liệu cung cấp dữ liệu cơ bản
    - Context Provider: Nguồn phát dữ liệu đến những comps cần nhận - Delivery
    - Context Consumer: Các comps nhận dữ liệu từ kho dữ liệu - Consumer
*/