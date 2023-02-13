import axios from 'axios';

const BASE_URL = 'http://localhost:9000/api/';
const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmVkMmJmZDRiMDAxNTNjYmFhMzc3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODk3ODU1MywiZXhwIjoxNjQ5NDEwNTUzfQ.YV02xRO7u0hp03gQjv5IlLgCfarVOS6ju0LSormrrXg';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`,
    },
});
