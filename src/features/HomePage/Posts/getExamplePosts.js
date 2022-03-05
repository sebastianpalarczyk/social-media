
export const getExamplePosts = async () => {
    const response = await fetch("/social-media/examplePosts.json");
 
    if(!response.ok){
        new Error(response.statusText);
    }
 
    return await response.json();
 };