import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "./api/task.api";


const reduxStore = configureStore({
    reducer: {
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: def => def().concat(taskApi.middleware)
})

export default reduxStore