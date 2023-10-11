let apiKey = "17185a63-657e-4c5b-8012-d36a55027788"; // hurts my eyes

axios.get("https://project-1-api.herokuapp.com/showdates", {
    params: {
        api_key: apiKey,
    }
})
.then(response => {
    console.log(response.data);
})
.catch(errur => {
    console.log(errur);
});