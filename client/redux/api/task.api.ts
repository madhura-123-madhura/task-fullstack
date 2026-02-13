import { APP_URL } from "@/constants/congic"
import { Task } from "@/type/Task"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_URL}/api/task` }),
    tagTypes: ["task"],
    endpoints: (builder) => {
        return {
            getTask: builder.query<Task[], void>({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["task"]
            }),
            addTask: builder.mutation<void, Task>({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["task"]
            }),
            updateTask: builder.mutation<void, Task>({
                query: taskData => {
                    return {
                        url: "/modify/" + taskData._id,
                        method: "PATCH",
                        body: taskData
                    }
                },
                invalidatesTags: ["task"]
            }),
            deleteTask: builder.mutation<void, string>({
                query: id => {
                    return {
                        url: "/remove/" + id,
                        method: "DELETE",

                    }
                },
                invalidatesTags: ["task"]
            }),

        }
    }
})

export const { useAddTaskMutation, useGetTaskQuery, useDeleteTaskMutation, useUpdateTaskMutation } = taskApi
