
export const getEnvVariables = () => {
  
  import.meta.env;

  return {
    ...import.meta.env,
    VITE_API_URL: "http://localhost:4001/api"
  }
}
