import { useHttpQuery } from "../hooks/useHttpQuery"

export const usePostQuery = () => {
    return useHttpQuery({
        queryKey: ['getPost'],
        HttpService: {
           
        }
    })
}