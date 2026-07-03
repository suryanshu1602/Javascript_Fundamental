interface ApiResponse<T> {
    status: number;
    data: T;
    message: string;
}

function fetchData<T>(url: string): ApiResponse<T> {
    return {
        status: 200,
        data: {} as T,
        message: "Success"
    };
}

const userResponse = fetchData<{ id: number; name: string }>("/users/1");
console.log(userResponse);
