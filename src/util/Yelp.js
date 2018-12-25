const apiKey = 'YIaM1zRG8m45h05-ZCCPJ6Kp5GV56eY__e0YXA6VvG9Wc9Utun65oScBJH_ptrqlWRpzCQnlkSZzsm8rZk7aZA7Gj2BlATjjtbgwgaZ33oGg4YFOteaQ-fR_CzAhXHYx';

export const Yelp = {
    search(term, location, sortBy) {
        const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
        const urlYelp = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

        return  fetch(
            corsAnywhere + urlYelp,
            {headers:{Authorization: `Bearer ${apiKey}`}}
            )
            .then(response => { return response.json()})
            .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(
                    business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    }
                );
            }
        });
    }
};