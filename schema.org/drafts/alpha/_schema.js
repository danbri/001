{
    "@context": {
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#", 
        "schema": "http://schema.org/", 
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#", 
        "http://schema.org/range": {
            "@type": "@id"
        }, 
        "http://www.w3.org/2000/01/rdf-schema#subClassOf": {
            "@type": "@id"
        }, 
        "http://schema.org/domain": {
            "@type": "@id"
        }
    }, 
    "@id": [
        {
            "@id": "schema:Volcano", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A volcano, like Fuji san", 
            "rdfs:label": "Volcano", 
            "rdfs:subClassOf": "schema:Landform"
        }, 
        {
            "@id": "schema:address", 
            "@type": "rdf:Property", 
            "schema:range": "schema:PostalAddress", 
            "rdfs:comment": "Physical address of the item.", 
            "rdfs:label": "address", 
            "schema:domain": [
                "schema:Organization", 
                "schema:Person", 
                "schema:Place"
            ]
        }, 
        {
            "@id": "schema:AutoBodyShop", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Auto body shop.", 
            "rdfs:label": "AutoBodyShop", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:DaySpa", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A day spa.", 
            "rdfs:label": "DaySpa", 
            "rdfs:subClassOf": "schema:HealthAndBeautyBusiness"
        }, 
        {
            "@id": "schema:reviewCount", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Number", 
            "rdfs:comment": "The count of total number of reviews.", 
            "rdfs:label": "reviewCount", 
            "schema:domain": "schema:AggregateRating"
        }, 
        {
            "@id": "schema:HomeGoodsStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A home goods store.", 
            "rdfs:label": "HomeGoodsStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:LakeBodyOfWater", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A lake (for example, Lake Pontrachain).", 
            "rdfs:label": "LakeBodyOfWater", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:School", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A school.", 
            "rdfs:label": "School", 
            "rdfs:subClassOf": "schema:EducationalOrganization"
        }, 
        {
            "@id": "schema:encodingFormat", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "mp3, mpeg4, etc.", 
            "rdfs:label": "encodingFormat", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:TelevisionStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A television station.", 
            "rdfs:label": "TelevisionStation", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:UserInteraction", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A user interacting with a page", 
            "rdfs:label": "UserInteraction", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:partOfTVSeries", 
            "@type": "rdf:Property", 
            "schema:range": "schema:TVSeries", 
            "rdfs:comment": "The TV series to which this episode or season belongs.", 
            "rdfs:label": "partOfTVSeries", 
            "schema:domain": [
                "schema:TVEpisode", 
                "schema:TVSeason"
            ]
        }, 
        {
            "@id": "schema:CafeOrCoffeeShop", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A cafe or coffee shop.", 
            "rdfs:label": "CafeOrCoffeeShop", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:UserLikes", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: Like an item.", 
            "rdfs:label": "UserLikes", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:about", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Thing", 
            "rdfs:comment": "The subject matter of the content.", 
            "rdfs:label": "about", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:alumni", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "Alumni of educational organization.", 
            "rdfs:label": "alumni", 
            "schema:domain": "schema:EducationalOrganization"
        }, 
        {
            "@id": "schema:ProfessionalService", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Provider of professional services.", 
            "rdfs:label": "ProfessionalService", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:Text", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Data type: Text.", 
            "rdfs:label": "Text", 
            "rdfs:subClassOf": "schema:DataType"
        }, 
        {
            "@id": "schema:unsaturatedFatContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of unsaturated fat.", 
            "rdfs:label": "unsaturatedFatContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:responsibilities", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Responsibilities associated with this role.", 
            "rdfs:label": "responsibilities", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:ratingCount", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Number", 
            "rdfs:comment": "The count of total number of ratings.", 
            "rdfs:label": "ratingCount", 
            "schema:domain": "schema:AggregateRating"
        }, 
        {
            "@id": "schema:BusStop", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A bus stop.", 
            "rdfs:label": "BusStop", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:BuddhistTemple", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A Buddhist temple.", 
            "rdfs:label": "BuddhistTemple", 
            "rdfs:subClassOf": "schema:PlaceOfWorship"
        }, 
        {
            "@id": "schema:Beach", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Beach.", 
            "rdfs:label": "Beach", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:UserPlays", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: Play count of an item, for example a video or a song.", 
            "rdfs:label": "UserPlays", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:contentURL", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "Actual bytes of the media object, for example the image file or video file.", 
            "rdfs:label": "contentURL", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:offerCount", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Integer", 
            "rdfs:comment": "The number of offers for the product.", 
            "rdfs:label": "offerCount", 
            "schema:domain": "schema:AggregateOffer"
        }, 
        {
            "@id": "schema:circle", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.", 
            "rdfs:label": "circle", 
            "schema:domain": "schema:GeoShape"
        }, 
        {
            "@id": "schema:BodyOfWater", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A body of water, such as a sea, ocean, or lake.", 
            "rdfs:label": "BodyOfWater", 
            "rdfs:subClassOf": "schema:Landform"
        }, 
        {
            "@id": "schema:GroceryStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A grocery store.", 
            "rdfs:label": "GroceryStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:softwareApplicationSubCategory", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Subcategory of the application.", 
            "rdfs:label": "softwareApplicationSubCategory", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:thumbnail", 
            "@type": "rdf:Property", 
            "schema:range": "schema:ImageObject", 
            "rdfs:comment": "Thumbnail image for an image or video.", 
            "rdfs:label": "thumbnail", 
            "schema:domain": [
                "schema:VideoObject", 
                "schema:ImageObject"
            ]
        }, 
        {
            "@id": "schema:softwareApplicationCategory", 
            "@type": "rdf:Property", 
            "schema:range": {
                "@id": "schema:SoftwareApplicationType", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "Type of software application.", 
                "rdfs:label": "SoftwareApplicationType", 
                "rdfs:subClassOf": "schema:Enumeration"
            }, 
            "rdfs:comment": "Type of software application.", 
            "rdfs:label": "softwareApplicationCategory", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:performerIn", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Event", 
            "rdfs:comment": "Event that this person is a performer or participant in.", 
            "rdfs:label": "performerIn", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:AboutPage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: About page.", 
            "rdfs:label": "AboutPage", 
            "rdfs:subClassOf": "schema:WebPage"
        }, 
        {
            "@id": "schema:MusicVideoObject", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A music video file.", 
            "rdfs:label": "MusicVideoObject", 
            "rdfs:subClassOf": "schema:MediaObject"
        }, 
        {
            "@id": "schema:LandmarksOrHistoricalBuildings", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An historical landmark or building.", 
            "rdfs:label": "LandmarksOrHistoricalBuildings", 
            "rdfs:subClassOf": "schema:Place"
        }, 
        {
            "@id": "schema:InsuranceAgency", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Insurance agency.", 
            "rdfs:label": "InsuranceAgency", 
            "rdfs:subClassOf": "schema:FinancialService"
        }, 
        {
            "@id": "schema:GardenStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A garden store.", 
            "rdfs:label": "GardenStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:numDownloads", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Integer", 
            "rdfs:comment": "Number of Downloads.", 
            "rdfs:label": "numDownloads", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:exifData", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "exif data for this object.", 
            "rdfs:label": "exifData", 
            "schema:domain": "schema:ImageObject"
        }, 
        {
            "@id": "schema:description", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A short description of the item.", 
            "rdfs:label": "description", 
            "schema:domain": "schema:Thing"
        }, 
        {
            "@id": "schema:postalCode", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The postal code. For example, 94043.", 
            "rdfs:label": "postalCode", 
            "schema:domain": "schema:PostalAddress"
        }, 
        {
            "@id": "schema:AudioObject", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An audio file.", 
            "rdfs:label": "AudioObject", 
            "rdfs:subClassOf": "schema:MediaObject"
        }, 
        {
            "@id": "schema:dateCreated", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "The date on which the CreativeWork was created.", 
            "rdfs:label": "dateCreated", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Plumber", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A plumbing service.", 
            "rdfs:label": "Plumber", 
            "rdfs:subClassOf": [
                "schema:HomeAndConstructionBusiness", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:SportsTeam", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Organization: Sports team.", 
            "rdfs:label": "SportsTeam", 
            "rdfs:subClassOf": "schema:Organization"
        }, 
        {
            "@id": "schema:SeaBodyOfWater", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A sea (for example, the Caspian sea).", 
            "rdfs:label": "SeaBodyOfWater", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:ConvenienceStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A convenience store.", 
            "rdfs:label": "ConvenienceStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:illustrator", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "The illustrator of the book.", 
            "rdfs:label": "illustrator", 
            "schema:domain": "schema:Book"
        }, 
        {
            "@id": "schema:ArtGallery", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An art gallery.", 
            "rdfs:label": "ArtGallery", 
            "rdfs:subClassOf": "schema:EntertainmentBusiness"
        }, 
        {
            "@id": "schema:box", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
            "rdfs:label": "box", 
            "schema:domain": "schema:GeoShape"
        }, 
        {
            "@id": "schema:gender", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Gender of the person.", 
            "rdfs:label": "gender", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:WPHeader", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The header section of the page.", 
            "rdfs:label": "WPHeader", 
            "rdfs:subClassOf": "schema:WebPageElement"
        }, 
        {
            "@id": "schema:memberOf", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "An organization to which the person belongs.", 
            "rdfs:label": "memberOf", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:encodings", 
            "@type": "rdf:Property", 
            "schema:range": "schema:MediaObject", 
            "rdfs:comment": "The media objects that encode this creative work", 
            "rdfs:label": "encodings", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Movie", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A movie.", 
            "rdfs:label": "Movie", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:reviewBody", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The actual body of the review", 
            "rdfs:label": "reviewBody", 
            "schema:domain": "schema:Review"
        }, 
        {
            "@id": "schema:addressCountry", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Country", 
            "rdfs:comment": "The country. For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
            "rdfs:label": "addressCountry", 
            "schema:domain": "schema:PostalAddress"
        }, 
        {
            "@id": "schema:IceCreamShop", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An ice cream shop", 
            "rdfs:label": "IceCreamShop", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:downloadURL", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "If the file can be downloaded, URL to download the binary.", 
            "rdfs:label": "downloadURL", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:Notary", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A notary.", 
            "rdfs:label": "Notary", 
            "rdfs:subClassOf": "schema:ProfessionalService"
        }, 
        {
            "@id": "schema:byArtist", 
            "@type": "rdf:Property", 
            "schema:range": "schema:MusicGroup", 
            "rdfs:comment": "The artist that performed this album or recording.", 
            "rdfs:label": "byArtist", 
            "schema:domain": [
                "schema:MusicAlbum", 
                "schema:MusicRecording"
            ]
        }, 
        {
            "@id": "schema:honorificPrefix", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.", 
            "rdfs:label": "honorificPrefix", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:type", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Auto added type field.", 
            "rdfs:label": "type", 
            "schema:domain": "schema:Thing"
        }, 
        {
            "@id": "schema:Park", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A park.", 
            "rdfs:label": "Park", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:additionalName", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "An additional name for a Person, can be used for a middle name.", 
            "rdfs:label": "additionalName", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:associatedMedia", 
            "@type": "rdf:Property", 
            "schema:range": "schema:MediaObject", 
            "rdfs:comment": "The media objects that encode this creative work. This property is a synonym for encodings.", 
            "rdfs:label": "associatedMedia", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:cookingMethod", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The method of cooking, such as Frying, Steaming, ...", 
            "rdfs:label": "cookingMethod", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:uploadDate", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "Date when this media object was uploaded to this site.", 
            "rdfs:label": "uploadDate", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:spouse", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "The person's spouse.", 
            "rdfs:label": "spouse", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:transcript", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "If this MediaObject is an AudioObject or VideoObject, the transcript of that object.", 
            "rdfs:label": "transcript", 
            "schema:domain": [
                "schema:VideoObject", 
                "schema:AudioObject"
            ]
        }, 
        {
            "@id": "schema:members", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "A member of this organization.", 
            "rdfs:label": "members", 
            "schema:domain": "schema:Organization"
        }, 
        {
            "@id": "schema:printColumn", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The number of the column in which the NewsArticle appears in the print edition.", 
            "rdfs:label": "printColumn", 
            "schema:domain": "schema:NewsArticle"
        }, 
        {
            "@id": "schema:FastFoodRestaurant", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A fast-food restaurant.", 
            "rdfs:label": "FastFoodRestaurant", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:AutoPartsStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An auto parts store.", 
            "rdfs:label": "AutoPartsStore", 
            "rdfs:subClassOf": [
                "schema:Store", 
                "schema:AutomotiveBusiness"
            ]
        }, 
        {
            "@id": "schema:manufacturer", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "The manufacturer of the product.", 
            "rdfs:label": "manufacturer", 
            "schema:domain": "schema:Product"
        }, 
        {
            "@id": "schema:WPAdBlock", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An advertising section of the page.", 
            "rdfs:label": "WPAdBlock", 
            "rdfs:subClassOf": "schema:WebPageElement"
        }, 
        {
            "@id": "schema:Restaurant", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A restaurant.", 
            "rdfs:label": "Restaurant", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:MotorcycleRepair", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A motorcycle repair shop.", 
            "rdfs:label": "MotorcycleRepair", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:caption", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The caption for this object.", 
            "rdfs:label": "caption", 
            "schema:domain": [
                "schema:VideoObject", 
                "schema:ImageObject"
            ]
        }, 
        {
            "@id": "schema:ratingValue", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The rating for the content.", 
            "rdfs:label": "ratingValue", 
            "schema:domain": "schema:Rating"
        }, 
        {
            "@id": "schema:model", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The model of the product.", 
            "rdfs:label": "model", 
            "schema:domain": "schema:Product"
        }, 
        {
            "@id": "schema:itemCondition", 
            "@type": "rdf:Property", 
            "schema:range": {
                "@id": "schema:OfferItemCondition", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "A list of possible conditions for the item for sale.", 
                "rdfs:label": "OfferItemCondition", 
                "rdfs:subClassOf": "schema:Enumeration"
            }, 
            "rdfs:comment": "The condition of the item for sale—for example New, Refurbished, Used, etc.", 
            "rdfs:label": "itemCondition", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:Recipe", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A recipe.", 
            "rdfs:label": "Recipe", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:DryCleaningOrLaundry", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A dry-cleaning business.", 
            "rdfs:label": "DryCleaningOrLaundry", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:FurnitureStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A furniture store.", 
            "rdfs:label": "FurnitureStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:SoftwareApplication", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A software application.", 
            "rdfs:label": "SoftwareApplication", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:primaryImageOfPage", 
            "@type": "rdf:Property", 
            "schema:range": "schema:ImageObject", 
            "rdfs:comment": "Indicates the main image on the page", 
            "rdfs:label": "primaryImageOfPage", 
            "schema:domain": "schema:WebPage"
        }, 
        {
            "@id": "schema:availability", 
            "@type": "rdf:Property", 
            "schema:range": {
                "@id": "schema:ItemAvailability", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "A list of possible product availablity options.", 
                "rdfs:label": "ItemAvailability", 
                "rdfs:subClassOf": "schema:Enumeration"
            }, 
            "rdfs:comment": "The availability of this item—for example In stock, Out of stock, Pre-order, etc.", 
            "rdfs:label": "availability", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:Zoo", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A zoo.", 
            "rdfs:label": "Zoo", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:WholesaleStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A wholesale store.", 
            "rdfs:label": "WholesaleStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:EmergencyService", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An emergency service, such as a fire station or ER.", 
            "rdfs:label": "EmergencyService", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:Integer", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Data type: Integer.", 
            "rdfs:label": "Integer", 
            "rdfs:subClassOf": "schema:Number"
        }, 
        {
            "@id": "schema:siblings", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "A sibling of the person.", 
            "rdfs:label": "siblings", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:PublicSwimmingPool", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A public swimming pool.", 
            "rdfs:label": "PublicSwimmingPool", 
            "rdfs:subClassOf": "schema:SportsActivityLocation"
        }, 
        {
            "@id": "schema:CreativeWork", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The most generic kind of creative work, including books, movies, photographs, software programs, etc.", 
            "rdfs:label": "CreativeWork", 
            "rdfs:subClassOf": "schema:Thing"
        }, 
        {
            "@id": "schema:JewelryStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A jewelry store.", 
            "rdfs:label": "JewelryStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:WPFooter", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The footer section of the page.", 
            "rdfs:label": "WPFooter", 
            "rdfs:subClassOf": "schema:WebPageElement"
        }, 
        {
            "@id": "schema:contentRating", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Official rating of a piece of content—for example,'MPAA PG-13'.", 
            "rdfs:label": "contentRating", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:BikeStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A bike store.", 
            "rdfs:label": "BikeStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:elevation", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The elevation of a location.", 
            "rdfs:label": "elevation", 
            "schema:domain": [
                "schema:GeoShape", 
                "schema:GeoCoordinates"
            ]
        }, 
        {
            "@id": "schema:price", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The offer price of the product.", 
            "rdfs:label": "price", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:PetStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A pet store.", 
            "rdfs:label": "PetStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:URL", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Data type: URL.", 
            "rdfs:label": "URL", 
            "rdfs:subClassOf": "schema:Text"
        }, 
        {
            "@id": "schema:SportingGoodsStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A sporting goods store.", 
            "rdfs:label": "SportingGoodsStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:Table", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A table on the page.", 
            "rdfs:label": "Table", 
            "rdfs:subClassOf": "schema:WebPageElement"
        }, 
        {
            "@id": "schema:Boolean", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Boolean: True or False.", 
            "rdfs:label": "Boolean", 
            "rdfs:subClassOf": "schema:DataType"
        }, 
        {
            "@id": "schema:ComedyClub", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A comedy club.", 
            "rdfs:label": "ComedyClub", 
            "rdfs:subClassOf": "schema:EntertainmentBusiness"
        }, 
        {
            "@id": "schema:playerType", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Player type required—for example, Flash or Silverlight.", 
            "rdfs:label": "playerType", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:colleagues", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "A colleague of the person.", 
            "rdfs:label": "colleagues", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:MedicalClinic", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A medical clinic.", 
            "rdfs:label": "MedicalClinic", 
            "rdfs:subClassOf": "schema:MedicalOrganization"
        }, 
        {
            "@id": "schema:GovernmentOrganization", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A governmental organization or agency.", 
            "rdfs:label": "GovernmentOrganization", 
            "rdfs:subClassOf": "schema:Organization"
        }, 
        {
            "@id": "schema:commentTime", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "The time at which the UserComment was made.", 
            "rdfs:label": "commentTime", 
            "schema:domain": "schema:UserComments"
        }, 
        {
            "@id": "schema:employmentType", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).", 
            "rdfs:label": "employmentType", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:affiliation", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "An organization that this person is affiliated with. For example, a school/university, a club, or a team.", 
            "rdfs:label": "affiliation", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:salaryCurrency", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The currency (coded using ISO 4217, http://en.wikipedia.org/wiki/ISO_4217 used for the main salary information in this job posting.", 
            "rdfs:label": "salaryCurrency", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:Synagogue", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A synagogue.", 
            "rdfs:label": "Synagogue", 
            "rdfs:subClassOf": "schema:PlaceOfWorship"
        }, 
        {
            "@id": "schema:TireShop", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A tire shop.", 
            "rdfs:label": "TireShop", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:worstRating", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.", 
            "rdfs:label": "worstRating", 
            "schema:domain": "schema:Rating"
        }, 
        {
            "@id": "schema:creator", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "The creator/author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork.", 
            "rdfs:label": "creator", 
            "schema:domain": [
                "schema:CreativeWork", 
                "schema:UserComments"
            ]
        }, 
        {
            "@id": "schema:PoliceStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A police station.", 
            "rdfs:label": "PoliceStation", 
            "rdfs:subClassOf": [
                "schema:CivicStructure", 
                "schema:EmergencyService"
            ]
        }, 
        {
            "@id": "schema:EmploymentAgency", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An employment agency.", 
            "rdfs:label": "EmploymentAgency", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:hiringOrganization", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "Organization offering the job position.", 
            "rdfs:label": "hiringOrganization", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:itemReviewed", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Thing", 
            "rdfs:comment": "The item that is being reviewed/rated.", 
            "rdfs:label": "itemReviewed", 
            "schema:domain": [
                "schema:AggregateRating", 
                "schema:Review"
            ]
        }, 
        {
            "@id": "schema:isDownloadable", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Boolean", 
            "rdfs:comment": "Indicates whether the software is available for download.", 
            "rdfs:label": "isDownloadable", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:AutoWash", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A car wash business.", 
            "rdfs:label": "AutoWash", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:OfficeEquipmentStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An office equipment store.", 
            "rdfs:label": "OfficeEquipmentStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:attendees", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "A person attending the event.", 
            "rdfs:label": "attendees", 
            "schema:domain": "schema:Event"
        }, 
        {
            "@id": "schema:Hotel", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A hotel.", 
            "rdfs:label": "Hotel", 
            "rdfs:subClassOf": "schema:LodgingBusiness"
        }, 
        {
            "@id": "schema:HealthClub", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A health club.", 
            "rdfs:label": "HealthClub", 
            "rdfs:subClassOf": [
                "schema:SportsActivityLocation", 
                "schema:HealthAndBeautyBusiness"
            ]
        }, 
        {
            "@id": "schema:MovieRentalStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A movie rental store.", 
            "rdfs:label": "MovieRentalStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:MusicAlbum", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A collection of music tracks.", 
            "rdfs:label": "MusicAlbum", 
            "rdfs:subClassOf": "schema:MusicPlaylist"
        }, 
        {
            "@id": "schema:isbn", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The ISBN of the book.", 
            "rdfs:label": "isbn", 
            "schema:domain": "schema:Book"
        }, 
        {
            "@id": "schema:seasons", 
            "@type": "rdf:Property", 
            "schema:range": "schema:TVSeason", 
            "rdfs:comment": "The seasons of the TV series.", 
            "rdfs:label": "seasons", 
            "schema:domain": "schema:TVSeries"
        }, 
        {
            "@id": "schema:GatedResidenceCommunity", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Residence type: Gated community.", 
            "rdfs:label": "GatedResidenceCommunity", 
            "rdfs:subClassOf": "schema:Residence"
        }, 
        {
            "@id": "schema:Bakery", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A bakery.", 
            "rdfs:label": "Bakery", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:Person", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A person (alive, dead, undead, or fictional).", 
            "rdfs:label": "Person", 
            "rdfs:subClassOf": "schema:Thing"
        }, 
        {
            "@id": "schema:Physician", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A doctor's office.", 
            "rdfs:label": "Physician", 
            "rdfs:subClassOf": "schema:MedicalOrganization"
        }, 
        {
            "@id": "schema:ItemPage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A page devoted to a single item, such as a particular product or hotel.", 
            "rdfs:label": "ItemPage", 
            "rdfs:subClassOf": "schema:WebPage"
        }, 
        {
            "@id": "schema:Country", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A country.", 
            "rdfs:label": "Country", 
            "rdfs:subClassOf": "schema:AdministrativeArea"
        }, 
        {
            "@id": "schema:PlaceOfWorship", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Place of worship, such as a church, synagogue, or mosque.", 
            "rdfs:label": "PlaceOfWorship", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:AnimalShelter", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Animal shelter.", 
            "rdfs:label": "AnimalShelter", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:itemOffered", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Product", 
            "rdfs:comment": "The item being sold.", 
            "rdfs:label": "itemOffered", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:Intangible", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.", 
            "rdfs:label": "Intangible", 
            "rdfs:subClassOf": "schema:Thing"
        }, 
        {
            "@id": "schema:ElectronicsStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An electronics store.", 
            "rdfs:label": "ElectronicsStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:fiberContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of fiber.", 
            "rdfs:label": "fiberContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:audio", 
            "@type": "rdf:Property", 
            "schema:range": "schema:AudioObject", 
            "rdfs:comment": "An embedded audio object.", 
            "rdfs:label": "audio", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:alumniOf", 
            "@type": "rdf:Property", 
            "schema:range": "schema:EducationalOrganization", 
            "rdfs:comment": "An educational organizations that the person is an alumni of.", 
            "rdfs:label": "alumniOf", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:contentLocation", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Place", 
            "rdfs:comment": "The location of the content.", 
            "rdfs:label": "contentLocation", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Dentist", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A dentist.", 
            "rdfs:label": "Dentist", 
            "rdfs:subClassOf": [
                "schema:MedicalOrganization", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:commentText", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The text of the UserComment.", 
            "rdfs:label": "commentText", 
            "schema:domain": "schema:UserComments"
        }, 
        {
            "@id": "schema:employees", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "People working for this organization.", 
            "rdfs:label": "employees", 
            "schema:domain": "schema:Organization"
        }, 
        {
            "@id": "schema:lowPrice", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The lowest price of all offers available.", 
            "rdfs:label": "lowPrice", 
            "schema:domain": "schema:AggregateOffer"
        }, 
        {
            "@id": "schema:calories", 
            "@type": "rdf:Property", 
            "schema:range": {
                "@id": "schema:Energy", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "Properties that take Enerygy as values are of the form '<Number> <Energy unit of measure>'", 
                "rdfs:label": "Energy", 
                "rdfs:subClassOf": "schema:Quantity"
            }, 
            "rdfs:comment": "The number of calories", 
            "rdfs:label": "calories", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:softwareApplicationCategoryDeprecated", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Thing", 
            "rdfs:comment": "Type of software application.", 
            "rdfs:label": "softwareApplicationCategoryDeprecated", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:FoodEstablishment", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A food-related business.", 
            "rdfs:label": "FoodEstablishment", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:NailSalon", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A nail salon.", 
            "rdfs:label": "NailSalon", 
            "rdfs:subClassOf": "schema:HealthAndBeautyBusiness"
        }, 
        {
            "@id": "schema:Mountain", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A mountain, like Mount Whitney or Mount Everest", 
            "rdfs:label": "Mountain", 
            "rdfs:subClassOf": "schema:Landform"
        }, 
        {
            "@id": "schema:telephone", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The telephone number.", 
            "rdfs:label": "telephone", 
            "schema:domain": [
                "schema:Organization", 
                "schema:ContactPoint", 
                "schema:Place", 
                "schema:Person"
            ]
        }, 
        {
            "@id": "schema:provider", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "Specifies the Person or Organization that distributed the CreativeWork.", 
            "rdfs:label": "provider", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:StructuredValue", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Structured values are strings—for example, addresses—that have certain constraints on their structure.", 
            "rdfs:label": "StructuredValue", 
            "rdfs:subClassOf": "schema:Intangible"
        }, 
        {
            "@id": "schema:videoFrameSize", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The frame size of the video.", 
            "rdfs:label": "videoFrameSize", 
            "schema:domain": "schema:VideoObject"
        }, 
        {
            "@id": "schema:saturatedFatContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of saturated fat.", 
            "rdfs:label": "saturatedFatContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:polygon", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more spacedelimited points where the first and final points are identical.", 
            "rdfs:label": "polygon", 
            "schema:domain": "schema:GeoShape"
        }, 
        {
            "@id": "schema:aggregateRating", 
            "@type": "rdf:Property", 
            "schema:range": "schema:AggregateRating", 
            "rdfs:comment": "The overall rating, based on a collection of reviews or ratings, of the item.", 
            "rdfs:label": "aggregateRating", 
            "schema:domain": [
                "schema:CreativeWork", 
                "schema:Offer", 
                "schema:Product", 
                "schema:Organization", 
                "schema:Place"
            ]
        }, 
        {
            "@id": "schema:TennisComplex", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A tennis complex.", 
            "rdfs:label": "TennisComplex", 
            "rdfs:subClassOf": "schema:SportsActivityLocation"
        }, 
        {
            "@id": "schema:director", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "The director of the movie, TV episode, or series.", 
            "rdfs:label": "director", 
            "schema:domain": [
                "schema:TVEpisode", 
                "schema:Movie", 
                "schema:TVSeries"
            ]
        }, 
        {
            "@id": "schema:Thing", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The most generic type of item.", 
            "rdfs:label": "Thing"
        }, 
        {
            "@id": "schema:albums", 
            "@type": "rdf:Property", 
            "schema:range": "schema:MusicAlbum", 
            "rdfs:comment": "A collection of music albums.", 
            "rdfs:label": "albums", 
            "schema:domain": "schema:MusicGroup"
        }, 
        {
            "@id": "schema:Book", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A book.", 
            "rdfs:label": "Book", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:prepTime", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Duration", 
            "rdfs:comment": "The length of time it takes to prepare the recipe, in ISO 8601 duration format.", 
            "rdfs:label": "prepTime", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:inAlbum", 
            "@type": "rdf:Property", 
            "schema:range": "schema:MusicAlbum", 
            "rdfs:comment": "The album to which this recording belongs.", 
            "rdfs:label": "inAlbum", 
            "schema:domain": "schema:MusicRecording"
        }, 
        {
            "@id": "schema:MusicStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A music store.", 
            "rdfs:label": "MusicStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:Crematorium", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A crematorium.", 
            "rdfs:label": "Crematorium", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:SubwayStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A subway station.", 
            "rdfs:label": "SubwayStation", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:availabilityDeprecated", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Thing", 
            "rdfs:comment": "The availability of this item—for example In stock, Out of stock, Pre-order, etc.", 
            "rdfs:label": "availabilityDeprecated", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:superEvent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Event", 
            "rdfs:comment": "An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.", 
            "rdfs:label": "superEvent", 
            "schema:domain": "schema:Event"
        }, 
        {
            "@id": "schema:recipeInstructions", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The steps to make the dish.", 
            "rdfs:label": "recipeInstructions", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:ContactPoint", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A contact point—for example, a Customer Complaints department.", 
            "rdfs:label": "ContactPoint", 
            "rdfs:subClassOf": "schema:StructuredValue"
        }, 
        {
            "@id": "schema:operatingSystems", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Operating systems supported (Windows 7, OSX 10.6, Android 1.6).", 
            "rdfs:label": "operatingSystems", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:Campground", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A campground.", 
            "rdfs:label": "Campground", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:SiteNavigationElement", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A navigation element of the page.", 
            "rdfs:label": "SiteNavigationElement", 
            "rdfs:subClassOf": "schema:WebPageElement"
        }, 
        {
            "@id": "schema:mainContentOfPage", 
            "@type": "rdf:Property", 
            "schema:range": "schema:WebPageElement", 
            "rdfs:comment": "Indicates if this web page element is the main subject of the page.", 
            "rdfs:label": "mainContentOfPage", 
            "schema:domain": "schema:WebPage"
        }, 
        {
            "@id": "schema:NutritionInformation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Nutritional information about the recipe.", 
            "rdfs:label": "NutritionInformation", 
            "rdfs:subClassOf": "schema:StructuredValue"
        }, 
        {
            "@id": "schema:CivicStructure", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A public structure, such as a town hall or concert hall.", 
            "rdfs:label": "CivicStructure", 
            "rdfs:subClassOf": "schema:Place"
        }, 
        {
            "@id": "schema:benefits", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Description of benefits associated with the job.", 
            "rdfs:label": "benefits", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:publishingPrinciples", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.", 
            "rdfs:label": "publishingPrinciples", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:FinancialService", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Financial services business.", 
            "rdfs:label": "FinancialService", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:Courthouse", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A courthouse.", 
            "rdfs:label": "Courthouse", 
            "rdfs:subClassOf": "schema:GovernmentBuilding"
        }, 
        {
            "@id": "schema:producer", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "The producer of the movie, TV series, season, or episode, or video.", 
            "rdfs:label": "producer", 
            "schema:domain": [
                "schema:TVEpisode", 
                "schema:Movie", 
                "schema:TVSeries"
            ]
        }, 
        {
            "@id": "schema:VideoObject", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A video file.", 
            "rdfs:label": "VideoObject", 
            "rdfs:subClassOf": "schema:MediaObject"
        }, 
        {
            "@id": "schema:isFamilyFriendly", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Boolean", 
            "rdfs:comment": "Indicates whether this content is family friendly.", 
            "rdfs:label": "isFamilyFriendly", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:GovernmentBuilding", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A government building.", 
            "rdfs:label": "GovernmentBuilding", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:bookEdition", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The edition of the book.", 
            "rdfs:label": "bookEdition", 
            "schema:domain": "schema:Book"
        }, 
        {
            "@id": "schema:contentSize", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "File size in (mega/kilo) bytes.", 
            "rdfs:label": "contentSize", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:email", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Email address.", 
            "rdfs:label": "email", 
            "schema:domain": [
                "schema:Organization", 
                "schema:ContactPoint", 
                "schema:Person"
            ]
        }, 
        {
            "@id": "schema:copyrightNoticeDeprecated", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:URL", 
                "schema:Text"
            ], 
            "rdfs:comment": "Any necessary copyright notice for claiming the intellectual property for the CreativeWork.", 
            "rdfs:label": "copyrightNoticeDeprecated", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:highPrice", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The highest price of all offers available.", 
            "rdfs:label": "highPrice", 
            "schema:domain": "schema:AggregateOffer"
        }, 
        {
            "@id": "schema:itemListOrder", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Type of ordering (e.g. Ascending, Descending, Unordered).", 
            "rdfs:label": "itemListOrder", 
            "schema:domain": "schema:ItemList"
        }, 
        {
            "@id": "schema:HardwareStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A hardware store.", 
            "rdfs:label": "HardwareStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:CollectionPage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: Collection page.", 
            "rdfs:label": "CollectionPage", 
            "rdfs:subClassOf": "schema:WebPage"
        }, 
        {
            "@id": "schema:ApartmentComplex", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Residence type: Apartment complex.", 
            "rdfs:label": "ApartmentComplex", 
            "rdfs:subClassOf": "schema:Residence"
        }, 
        {
            "@id": "schema:HealthAndBeautyBusiness", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Health and beauty.", 
            "rdfs:label": "HealthAndBeautyBusiness", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:HousePainter", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A house painting service.", 
            "rdfs:label": "HousePainter", 
            "rdfs:subClassOf": [
                "schema:HomeAndConstructionBusiness", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:ContactPage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: Contact page.", 
            "rdfs:label": "ContactPage", 
            "rdfs:subClassOf": "schema:WebPage"
        }, 
        {
            "@id": "schema:jobLocation", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Place", 
            "rdfs:comment": "A (typically single) geographic location associated with the job position.", 
            "rdfs:label": "jobLocation", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:qualifications", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Specific qualifications required for this role.", 
            "rdfs:label": "qualifications", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:recipeYield", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The quantity produced by the recipe (for example, number of people served, number of servings, etc).", 
            "rdfs:label": "recipeYield", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:embedURL", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "A URL pointing to a player for a specific video. In general, this is the information in the src element of an embed tag and should not be the same as the content of the loc tag.", 
            "rdfs:label": "embedURL", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:mentions", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Thing", 
            "rdfs:comment": "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", 
            "rdfs:label": "mentions", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Attorney", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Professional service: Attorney.", 
            "rdfs:label": "Attorney", 
            "rdfs:subClassOf": "schema:ProfessionalService"
        }, 
        {
            "@id": "schema:Electrician", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An electrician.", 
            "rdfs:label": "Electrician", 
            "rdfs:subClassOf": [
                "schema:HomeAndConstructionBusiness", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:printSection", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "If this NewsArticle appears in print, this field indicates the print section in which the article appeared.", 
            "rdfs:label": "printSection", 
            "schema:domain": "schema:NewsArticle"
        }, 
        {
            "@id": "schema:bookFormat", 
            "@type": "rdf:Property", 
            "schema:range": {
                "@id": "schema:BookFormatType", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "The publication format of the book.", 
                "rdfs:label": "BookFormatType", 
                "rdfs:subClassOf": "schema:Enumeration"
            }, 
            "rdfs:comment": "The format of the book.", 
            "rdfs:label": "bookFormat", 
            "schema:domain": "schema:Book"
        }, 
        {
            "@id": "schema:GeneralContractor", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A general contractor.", 
            "rdfs:label": "GeneralContractor", 
            "rdfs:subClassOf": [
                "schema:HomeAndConstructionBusiness", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:Rating", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The rating of the video.", 
            "rdfs:label": "Rating", 
            "rdfs:subClassOf": "schema:Intangible"
        }, 
        {
            "@id": "schema:ToyStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A toystore.", 
            "rdfs:label": "ToyStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:BedAndBreakfast", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Bed and breakfast.", 
            "rdfs:label": "BedAndBreakfast", 
            "rdfs:subClassOf": "schema:LodgingBusiness"
        }, 
        {
            "@id": "schema:associatedArticle", 
            "@type": "rdf:Property", 
            "schema:range": "schema:NewsArticle", 
            "rdfs:comment": "A NewsArticle associated with the Media Object.", 
            "rdfs:label": "associatedArticle", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:VisualArtsEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Visual arts event.", 
            "rdfs:label": "VisualArtsEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:MobileSoftwareApplication", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A mobile software application.", 
            "rdfs:label": "MobileSoftwareApplication", 
            "rdfs:subClassOf": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:follows", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "The most generic uni-directional social relation.", 
            "rdfs:label": "follows", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:baseSalary", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Number", 
            "rdfs:comment": "The base salary of the job.", 
            "rdfs:label": "baseSalary", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:productionCompany", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "The production company or studio that made the movie, TV series, season, or episode, or video.", 
            "rdfs:label": "productionCompany", 
            "schema:domain": [
                "schema:VideoObject", 
                "schema:TVEpisode", 
                "schema:Movie", 
                "schema:TVSeries"
            ]
        }, 
        {
            "@id": "schema:postOfficeBoxNumber", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The post offce box number for PO box addresses.", 
            "rdfs:label": "postOfficeBoxNumber", 
            "schema:domain": "schema:PostalAddress"
        }, 
        {
            "@id": "schema:inPlaylist", 
            "@type": "rdf:Property", 
            "schema:range": "schema:MusicPlaylist", 
            "rdfs:comment": "The playlist to which this recording belongs.", 
            "rdfs:label": "inPlaylist", 
            "schema:domain": "schema:MusicRecording"
        }, 
        {
            "@id": "schema:accountablePerson", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "Specifies the Person that is legally accountable for the CreativeWork.", 
            "rdfs:label": "accountablePerson", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:UserCheckins", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: Check-in at a place.", 
            "rdfs:label": "UserCheckins", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:LegislativeBuilding", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A legislative building—for example, the state capitol.", 
            "rdfs:label": "LegislativeBuilding", 
            "rdfs:subClassOf": "schema:GovernmentBuilding"
        }, 
        {
            "@id": "schema:version", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Number", 
            "rdfs:comment": "The version of the CreativeWork embodied by a specified resource.", 
            "rdfs:label": "version", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:homeLocation", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:ContactPoint", 
                "schema:Place"
            ], 
            "rdfs:comment": "A contact location for a person's residence.", 
            "rdfs:label": "homeLocation", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:dateModified", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "The date on which the CreativeWork was most recently modified.", 
            "rdfs:label": "dateModified", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:recipeCategory", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The category of the recipe—for example, appetizer, entree, etc.", 
            "rdfs:label": "recipeCategory", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:url", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "URL of the item.", 
            "rdfs:label": "url", 
            "schema:domain": "schema:Thing"
        }, 
        {
            "@id": "schema:EducationEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Education event.", 
            "rdfs:label": "EducationEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:partOfSeason", 
            "@type": "rdf:Property", 
            "schema:range": "schema:TVSeason", 
            "rdfs:comment": "The season to which this episode belongs.", 
            "rdfs:label": "partOfSeason", 
            "schema:domain": "schema:TVEpisode"
        }, 
        {
            "@id": "schema:fatContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of fat.", 
            "rdfs:label": "fatContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:latitude", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The latitude of a location. For example 37.42242.", 
            "rdfs:label": "latitude", 
            "schema:domain": "schema:GeoCoordinates"
        }, 
        {
            "@id": "schema:BankOrCreditUnion", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Bank or credit union.", 
            "rdfs:label": "BankOrCreditUnion", 
            "rdfs:subClassOf": "schema:FinancialService"
        }, 
        {
            "@id": "schema:SaleEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Sales event.", 
            "rdfs:label": "SaleEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:geo", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:GeoShape", 
                "schema:GeoCoordinates"
            ], 
            "rdfs:comment": "The geo coordinates of the place.", 
            "rdfs:label": "geo", 
            "schema:domain": "schema:Place"
        }, 
        {
            "@id": "schema:acceptsReservations", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:URL", 
                "schema:Text"
            ], 
            "rdfs:comment": "Either Yes/No, or a URL at which reservations can be made.", 
            "rdfs:label": "acceptsReservations", 
            "schema:domain": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:tickerSymbol", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we reccommend using the controlled vocaulary of Market Identifier Codes (MIC) specified in ISO15022.", 
            "rdfs:label": "tickerSymbol", 
            "schema:domain": {
                "@id": "schema:Corporation", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "Organization: A business corporation.", 
                "rdfs:label": "Corporation", 
                "rdfs:subClassOf": "schema:Organization"
            }
        }, 
        {
            "@id": "schema:Quantity", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.", 
            "rdfs:label": "Quantity", 
            "rdfs:subClassOf": "schema:Intangible"
        }, 
        {
            "@id": "schema:Sculpture", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A piece of sculpture.", 
            "rdfs:label": "Sculpture", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:ComputerStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A computer store.", 
            "rdfs:label": "ComputerStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:RadioStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A radio station.", 
            "rdfs:label": "RadioStation", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:Hostel", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A hostel.", 
            "rdfs:label": "Hostel", 
            "rdfs:subClassOf": "schema:LodgingBusiness"
        }, 
        {
            "@id": "schema:addressRegion", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The region. For example, CA.", 
            "rdfs:label": "addressRegion", 
            "schema:domain": "schema:PostalAddress"
        }, 
        {
            "@id": "schema:subEvents", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Event", 
            "rdfs:comment": "Events that are a part of this event. For example, a conference event includes many presentations, each are subEvents of the conference.", 
            "rdfs:label": "subEvents", 
            "schema:domain": "schema:Event"
        }, 
        {
            "@id": "schema:Duration", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Quantity: Duration (use  ISO 8601 duration format).", 
            "rdfs:label": "Duration", 
            "rdfs:subClassOf": "schema:Quantity"
        }, 
        {
            "@id": "schema:openingHours", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Duration", 
            "rdfs:comment": "The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.- Days are specified using the following two-letter combinations: Mo, Tu, We, Th, Fr, Sa, Su.- Times are specified using 24:00 time. For example, 3pm is specified as 15:00. - Here is an example: <time itemprop=\"openingHours\" datetime=\"Tu,Th 16:00-20:00\">Tuesdays and Thursdays 4-8pm</time>. - If a business is open 7 days a week, then it can be specified as <time itemprop=\"openingHours\" datetime=\"Mo-Su\">Monday through Sunday, all day</time>.", 
            "rdfs:label": "openingHours", 
            "schema:domain": [
                "schema:CivicStructure", 
                "schema:LocalBusiness"
            ]
        }, 
        {
            "@id": "schema:Reservoir", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A reservoir, like the Lake Kariba reservoir.", 
            "rdfs:label": "Reservoir", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:RoofingContractor", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A roofing contractor.", 
            "rdfs:label": "RoofingContractor", 
            "rdfs:subClassOf": [
                "schema:HomeAndConstructionBusiness", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:keywords", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The keywords/tags used to describe this content.", 
            "rdfs:label": "keywords", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:numTracks", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Integer", 
            "rdfs:comment": "The number of tracks in this album or playlist.", 
            "rdfs:label": "numTracks", 
            "schema:domain": "schema:MusicPlaylist"
        }, 
        {
            "@id": "schema:GolfCourse", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A golf course.", 
            "rdfs:label": "GolfCourse", 
            "rdfs:subClassOf": "schema:SportsActivityLocation"
        }, 
        {
            "@id": "schema:AggregateOffer", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "When a single product that has different offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.", 
            "rdfs:label": "AggregateOffer", 
            "rdfs:subClassOf": "schema:Offer"
        }, 
        {
            "@id": "schema:RVPark", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An RV park.", 
            "rdfs:label": "RVPark", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:height", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Distance", 
            "rdfs:comment": "The height of the media object.", 
            "rdfs:label": "height", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:musicBy", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Person", 
                "schema:MusicGroup"
            ], 
            "rdfs:comment": "The composer of the movie or TV soundtrack.", 
            "rdfs:label": "musicBy", 
            "schema:domain": [
                "schema:TVEpisode", 
                "schema:Movie", 
                "schema:TVSeries"
            ]
        }, 
        {
            "@id": "schema:Museum", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A museum.", 
            "rdfs:label": "Museum", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:bestRating", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.", 
            "rdfs:label": "bestRating", 
            "schema:domain": "schema:Rating"
        }, 
        {
            "@id": "schema:Enumeration", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Lists or enumerations—for example, a list of cuisines or music genres, etc.", 
            "rdfs:label": "Enumeration", 
            "rdfs:subClassOf": "schema:Intangible"
        }, 
        {
            "@id": "schema:SingleFamilyResidence", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Residence type: Single-family home.", 
            "rdfs:label": "SingleFamilyResidence", 
            "rdfs:subClassOf": "schema:Residence"
        }, 
        {
            "@id": "schema:PostOffice", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A post office.", 
            "rdfs:label": "PostOffice", 
            "rdfs:subClassOf": {
                "@id": "schema:GovernmentOffice", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "A government office—for example, an IRS or DMV office.", 
                "rdfs:label": "GovernmentOffice", 
                "rdfs:subClassOf": "schema:LocalBusiness"
            }
        }, 
        {
            "@id": "schema:HobbyShop", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A hobby store.", 
            "rdfs:label": "HobbyShop", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:CityHall", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A city hall.", 
            "rdfs:label": "CityHall", 
            "rdfs:subClassOf": "schema:GovernmentBuilding"
        }, 
        {
            "@id": "schema:location", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:PostalAddress", 
                "schema:Place"
            ], 
            "rdfs:comment": "The location of the event or organization.", 
            "rdfs:label": "location", 
            "schema:domain": [
                "schema:Event", 
                "schema:Organization"
            ]
        }, 
        {
            "@id": "schema:isPartOf", 
            "@type": "rdf:Property", 
            "schema:range": "schema:CollectionPage", 
            "rdfs:comment": "Indicates the collection or gallery to which the item belongs.", 
            "rdfs:label": "isPartOf", 
            "schema:domain": "schema:WebPage"
        }, 
        {
            "@id": "schema:StadiumOrArena", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A stadium.", 
            "rdfs:label": "StadiumOrArena", 
            "rdfs:subClassOf": [
                "schema:CivicStructure", 
                "schema:SportsActivityLocation"
            ]
        }, 
        {
            "@id": "schema:currenciesAccepted", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The currency accepted (in ISO 4217 currency format).", 
            "rdfs:label": "currenciesAccepted", 
            "schema:domain": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:transFatContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of trans fat.", 
            "rdfs:label": "transFatContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:VeterinaryCare", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A vet's office.", 
            "rdfs:label": "VeterinaryCare", 
            "rdfs:subClassOf": "schema:MedicalOrganization"
        }, 
        {
            "@id": "schema:Map", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A map.", 
            "rdfs:label": "Map", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:AutoRepair", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Car repair business.", 
            "rdfs:label": "AutoRepair", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:genre", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Genre of the creative work", 
            "rdfs:label": "genre", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:sugarContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of sugar.", 
            "rdfs:label": "sugarContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:WPSideBar", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A sidebar section of the page.", 
            "rdfs:label": "WPSideBar", 
            "rdfs:subClassOf": "schema:WebPageElement"
        }, 
        {
            "@id": "schema:ExerciseGym", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A gym.", 
            "rdfs:label": "ExerciseGym", 
            "rdfs:subClassOf": "schema:SportsActivityLocation"
        }, 
        {
            "@id": "schema:brand", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "The brand of the product.", 
            "rdfs:label": "brand", 
            "schema:domain": "schema:Product"
        }, 
        {
            "@id": "schema:UserComments", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: A comment about an item.", 
            "rdfs:label": "UserComments", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:DepartmentStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A department store.", 
            "rdfs:label": "DepartmentStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:ProfilePage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: Profile page.", 
            "rdfs:label": "ProfilePage", 
            "rdfs:subClassOf": "schema:WebPage"
        }, 
        {
            "@id": "schema:reviews", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Review", 
            "rdfs:comment": "Review of the item.", 
            "rdfs:label": "reviews", 
            "schema:domain": [
                "schema:CreativeWork", 
                "schema:Offer", 
                "schema:Product", 
                "schema:Organization", 
                "schema:Place"
            ]
        }, 
        {
            "@id": "schema:MiddleSchool", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A middle school.", 
            "rdfs:label": "MiddleSchool", 
            "rdfs:subClassOf": "schema:EducationalOrganization"
        }, 
        {
            "@id": "schema:performers", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "The main performer or performers of the event—for example, a presenter, musician, or actor.", 
            "rdfs:label": "performers", 
            "schema:domain": "schema:Event"
        }, 
        {
            "@id": "schema:Number", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Data type: Number.", 
            "rdfs:label": "Number", 
            "rdfs:subClassOf": "schema:DataType"
        }, 
        {
            "@id": "schema:priceCurrency", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The currency (in 3-letter ISO 4217 format) of the offer price.", 
            "rdfs:label": "priceCurrency", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:permissions", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Permissions required on OS to run the application (e.g. app requires Internet access).", 
            "rdfs:label": "permissions", 
            "schema:domain": "schema:MobileSoftwareApplication"
        }, 
        {
            "@id": "schema:significantLinks", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most", 
            "rdfs:label": "significantLinks", 
            "schema:domain": "schema:WebPage"
        }, 
        {
            "@id": "schema:TravelAgency", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A travel agency.", 
            "rdfs:label": "TravelAgency", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:ShoeStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A shoe store.", 
            "rdfs:label": "ShoeStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:workLocation", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:ContactPoint", 
                "schema:Place"
            ], 
            "rdfs:comment": "A contact location for a person's place of work.", 
            "rdfs:label": "workLocation", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:SkiResort", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A ski resort.", 
            "rdfs:label": "SkiResort", 
            "rdfs:subClassOf": "schema:SportsActivityLocation"
        }, 
        {
            "@id": "schema:duration", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Duration", 
            "rdfs:comment": "The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format.", 
            "rdfs:label": "duration", 
            "schema:domain": [
                "schema:Movie", 
                "schema:MusicRecording", 
                "schema:Event", 
                "schema:MediaObject"
            ]
        }, 
        {
            "@id": "schema:AutomatedTeller", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "ATM/cash machine.", 
            "rdfs:label": "AutomatedTeller", 
            "rdfs:subClassOf": "schema:FinancialService"
        }, 
        {
            "@id": "schema:HomeAndConstructionBusiness", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A construction business.", 
            "rdfs:label": "HomeAndConstructionBusiness", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:Canal", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A canal, like the Panama Canal", 
            "rdfs:label": "Canal", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:SportsActivityLocation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A sports location, such as a playing field.", 
            "rdfs:label": "SportsActivityLocation", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:NGO", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Organization: Non-governmental Organization.", 
            "rdfs:label": "NGO", 
            "rdfs:subClassOf": "schema:Organization"
        }, 
        {
            "@id": "schema:events", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Event", 
            "rdfs:comment": "Upcoming or past events associated with this place or organization.", 
            "rdfs:label": "events", 
            "schema:domain": [
                "schema:Organization", 
                "schema:Place"
            ]
        }, 
        {
            "@id": "schema:editor", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "Specifies the Person who edited the CreativeWork.", 
            "rdfs:label": "editor", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:offers", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Offer", 
            "rdfs:comment": "An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
            "rdfs:label": "offers", 
            "schema:domain": [
                "schema:CreativeWork", 
                "schema:Product", 
                "schema:Event", 
                "schema:MediaObject"
            ]
        }, 
        {
            "@id": "schema:musicGroupMember", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "A member of the music group—for example, John, Paul, George, or Ringo.", 
            "rdfs:label": "musicGroupMember", 
            "schema:domain": "schema:MusicGroup"
        }, 
        {
            "@id": "schema:honorificSuffix", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.", 
            "rdfs:label": "honorificSuffix", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:discussionUrl", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "A link to the page containing the comments of the CreativeWork.", 
            "rdfs:label": "discussionUrl", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:ImageObject", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An image file.", 
            "rdfs:label": "ImageObject", 
            "rdfs:subClassOf": "schema:MediaObject"
        }, 
        {
            "@id": "schema:bitrate", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The bitrate of the media object.", 
            "rdfs:label": "bitrate", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:Place", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Entities that have a somewhat fixed, physical extension.", 
            "rdfs:label": "Place", 
            "rdfs:subClassOf": "schema:Thing"
        }, 
        {
            "@id": "schema:ScholarlyArticle", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A scholarly article.", 
            "rdfs:label": "ScholarlyArticle", 
            "rdfs:subClassOf": "schema:Article"
        }, 
        {
            "@id": "schema:nationality", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Country", 
            "rdfs:comment": "Nationality of the person.", 
            "rdfs:label": "nationality", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:Distance", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Properties that take Distances as values are of the form '<Number> <Length unit of measure>'. E.g., '7 ft'", 
            "rdfs:label": "Distance", 
            "rdfs:subClassOf": "schema:Quantity"
        }, 
        {
            "@id": "schema:TouristAttraction", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A tourist attraction.", 
            "rdfs:label": "TouristAttraction", 
            "rdfs:subClassOf": "schema:Place"
        }, 
        {
            "@id": "schema:MusicPlaylist", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A collection of music tracks in playlist form.", 
            "rdfs:label": "MusicPlaylist", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:TattooParlor", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A tattoo parlor.", 
            "rdfs:label": "TattooParlor", 
            "rdfs:subClassOf": "schema:HealthAndBeautyBusiness"
        }, 
        {
            "@id": "schema:jobTitle", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The job title of the person (for example, Financial Manager).", 
            "rdfs:label": "jobTitle", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:TVSeries", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A television series.", 
            "rdfs:label": "TVSeries", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:AutoDealer", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An car dealership.", 
            "rdfs:label": "AutoDealer", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:Event", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An event happening at a certain time at a certain location.", 
            "rdfs:label": "Event", 
            "rdfs:subClassOf": "schema:Thing"
        }, 
        {
            "@id": "schema:BarOrPub", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A bar or pub.", 
            "rdfs:label": "BarOrPub", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:DanceGroup", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A dance group—for example, the Alvin Ailey Dance Theater or Riverdance.", 
            "rdfs:label": "DanceGroup", 
            "rdfs:subClassOf": "schema:PerformingGroup"
        }, 
        {
            "@id": "schema:Float", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Data type: Floating number.", 
            "rdfs:label": "Float", 
            "rdfs:subClassOf": "schema:Number"
        }, 
        {
            "@id": "schema:DataType", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The basic data types such as Integers, Strings, etc.", 
            "rdfs:label": "DataType"
        }, 
        {
            "@id": "schema:PerformingArtsTheater", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A theatre or other performing art center.", 
            "rdfs:label": "PerformingArtsTheater", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:LocalBusiness", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.", 
            "rdfs:label": "LocalBusiness", 
            "rdfs:subClassOf": [
                "schema:Organization", 
                "schema:Place"
            ]
        }, 
        {
            "@id": "schema:requiresSubscription", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Boolean", 
            "rdfs:comment": "Indicates if use of the media require a subscription  (either paid or free). Allowed values are yes or no.", 
            "rdfs:label": "requiresSubscription", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:numberOfEpisodes", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Number", 
            "rdfs:comment": "The number of episodes in this season or series.", 
            "rdfs:label": "numberOfEpisodes", 
            "schema:domain": [
                "schema:TVSeries", 
                "schema:TVSeason"
            ]
        }, 
        {
            "@id": "schema:Mosque", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A mosque.", 
            "rdfs:label": "Mosque", 
            "rdfs:subClassOf": "schema:PlaceOfWorship"
        }, 
        {
            "@id": "schema:City", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A city or town.", 
            "rdfs:label": "City", 
            "rdfs:subClassOf": "schema:AdministrativeArea"
        }, 
        {
            "@id": "schema:GasStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A gas station.", 
            "rdfs:label": "GasStation", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:birthDate", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "Date of birth.", 
            "rdfs:label": "birthDate", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:faxNumber", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The fax number.", 
            "rdfs:label": "faxNumber", 
            "schema:domain": [
                "schema:Organization", 
                "schema:ContactPoint", 
                "schema:Place", 
                "schema:Person"
            ]
        }, 
        {
            "@id": "schema:recipeCuisine", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The cuisine of the recipe (for example, French or Ethopian).", 
            "rdfs:label": "recipeCuisine", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:streetAddress", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The street address. For example, 1600 Amphitheatre Pkwy.", 
            "rdfs:label": "streetAddress", 
            "schema:domain": "schema:PostalAddress"
        }, 
        {
            "@id": "schema:AdministrativeArea", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A geographical region under the jurisdiction of a particular government.", 
            "rdfs:label": "AdministrativeArea", 
            "rdfs:subClassOf": "schema:Place"
        }, 
        {
            "@id": "schema:actors", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "A cast member of the movie, TV series, season, or episode, or video.", 
            "rdfs:label": "actors", 
            "schema:domain": [
                "schema:TVEpisode", 
                "schema:Movie", 
                "schema:TVSeries"
            ]
        }, 
        {
            "@id": "schema:encodesCreativeWork", 
            "@type": "rdf:Property", 
            "schema:range": "schema:CreativeWork", 
            "rdfs:comment": "The creative work encoded by this media object", 
            "rdfs:label": "encodesCreativeWork", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:servesCuisine", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The cuisine of the restaurant.", 
            "rdfs:label": "servesCuisine", 
            "schema:domain": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:title", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The title of the job.", 
            "rdfs:label": "title", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:MovieTheater", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A movie theater.", 
            "rdfs:label": "MovieTheater", 
            "rdfs:subClassOf": [
                "schema:EntertainmentBusiness", 
                "schema:CivicStructure"
            ]
        }, 
        {
            "@id": "schema:author", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangabely.", 
            "rdfs:label": "author", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:AdultEntertainment", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An adult entertainment establishment.", 
            "rdfs:label": "AdultEntertainment", 
            "rdfs:subClassOf": "schema:EntertainmentBusiness"
        }, 
        {
            "@id": "schema:interactionCount", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
            "rdfs:label": "interactionCount", 
            "schema:domain": [
                "schema:CreativeWork", 
                "schema:MediaObject", 
                "schema:Organization", 
                "schema:Person", 
                "schema:Place"
            ]
        }, 
        {
            "@id": "schema:line", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.", 
            "rdfs:label": "line", 
            "schema:domain": "schema:GeoShape"
        }, 
        {
            "@id": "schema:MensClothingStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A men's clothing store.", 
            "rdfs:label": "MensClothingStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:photos", 
            "@type": "rdf:Property", 
            "schema:range": [
                {
                    "@id": "schema:Photograph", 
                    "@type": "rdfs:Class", 
                    "rdfs:comment": "A photograph.", 
                    "rdfs:label": "Photograph", 
                    "rdfs:subClassOf": "schema:CreativeWork"
                }, 
                "schema:ImageObject"
            ], 
            "rdfs:comment": "Photographs of this place.", 
            "rdfs:label": "photos", 
            "schema:domain": "schema:Place"
        }, 
        {
            "@id": "schema:regionsAllowed", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Place", 
            "rdfs:comment": "The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in ISO 3166 format.", 
            "rdfs:label": "regionsAllowed", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:Language", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Natural languages such as Spanish, Tamil, Hindi, English, etc. and programming languages such as Scheme and Lisp.", 
            "rdfs:label": "Language", 
            "rdfs:subClassOf": "schema:Intangible"
        }, 
        {
            "@id": "schema:MotorcycleDealer", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A motorcycle dealer.", 
            "rdfs:label": "MotorcycleDealer", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:Optician", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An optician's store.", 
            "rdfs:label": "Optician", 
            "rdfs:subClassOf": "schema:MedicalOrganization"
        }, 
        {
            "@id": "schema:Continent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "One of the continents (for example, Europe or Africa).", 
            "rdfs:label": "Continent", 
            "rdfs:subClassOf": "schema:Landform"
        }, 
        {
            "@id": "schema:trailer", 
            "@type": "rdf:Property", 
            "schema:range": "schema:VideoObject", 
            "rdfs:comment": "The trailer of the movie or TV series, season, or episode.", 
            "rdfs:label": "trailer", 
            "schema:domain": [
                "schema:TVEpisode", 
                "schema:Movie", 
                "schema:TVSeries", 
                "schema:TVSeason"
            ]
        }, 
        {
            "@id": "schema:MusicRecording", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A music recording (track), usually a single song.", 
            "rdfs:label": "MusicRecording", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:bookFormatDeprecated", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Thing", 
            "rdfs:comment": "The format of the book.", 
            "rdfs:label": "bookFormatDeprecated", 
            "schema:domain": "schema:Book"
        }, 
        {
            "@id": "schema:Library", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A library.", 
            "rdfs:label": "Library", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:TouristInformationCenter", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A tourist information center.", 
            "rdfs:label": "TouristInformationCenter", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:specialCommitments", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.", 
            "rdfs:label": "specialCommitments", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:occupationalCategory", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.", 
            "rdfs:label": "occupationalCategory", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:Review", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A review of an item - for example, a restaurant, movie, or store.", 
            "rdfs:label": "Review", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:cookTime", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Duration", 
            "rdfs:comment": "The time it takes to actually cook the dish, in ISO 8601 duration format.", 
            "rdfs:label": "cookTime", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:VideoGallery", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: Video gallery page.", 
            "rdfs:label": "VideoGallery", 
            "rdfs:subClassOf": "schema:CollectionPage"
        }, 
        {
            "@id": "schema:RealEstateAgent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A real-estate agent.", 
            "rdfs:label": "RealEstateAgent", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:MusicEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Music event.", 
            "rdfs:label": "MusicEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:tracks", 
            "@type": "rdf:Property", 
            "schema:range": "schema:MusicRecording", 
            "rdfs:comment": "A music recording (track)—usually a single song.", 
            "rdfs:label": "tracks", 
            "schema:domain": [
                "schema:MusicPlaylist", 
                "schema:MusicGroup"
            ]
        }, 
        {
            "@id": "schema:screenshots", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "Link(s) to app screenshots.", 
            "rdfs:label": "screenshots", 
            "schema:domain": "schema:MobileSoftwareApplication"
        }, 
        {
            "@id": "schema:Store", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A retail good store.", 
            "rdfs:label": "Store", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:cholesterolContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of milligrams of cholesterol.", 
            "rdfs:label": "cholesterolContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:GeoShape", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The geographic shape of a place.", 
            "rdfs:label": "GeoShape", 
            "rdfs:subClassOf": "schema:StructuredValue"
        }, 
        {
            "@id": "schema:EntertainmentBusiness", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A business providing entertainment.", 
            "rdfs:label": "EntertainmentBusiness", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:countriesNotSupported", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Countries that dlsallow the application.", 
            "rdfs:label": "countriesNotSupported", 
            "schema:domain": "schema:MobileSoftwareApplication"
        }, 
        {
            "@id": "schema:image", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "URL of an image of the item.", 
            "rdfs:label": "image", 
            "schema:domain": "schema:Thing"
        }, 
        {
            "@id": "schema:datePosted", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "Publication date for the job posting.", 
            "rdfs:label": "datePosted", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:endDate", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "The end date and time of the event (in ISO 8601 date format).", 
            "rdfs:label": "endDate", 
            "schema:domain": [
                "schema:TVSeries", 
                "schema:Event", 
                "schema:TVSeason"
            ]
        }, 
        {
            "@id": "schema:EducationalOrganization", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An educational organization.", 
            "rdfs:label": "EducationalOrganization", 
            "rdfs:subClassOf": "schema:Organization"
        }, 
        {
            "@id": "schema:NewsArticle", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A news article", 
            "rdfs:label": "NewsArticle", 
            "rdfs:subClassOf": "schema:Article"
        }, 
        {
            "@id": "schema:priceRange", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The price range of the business, for example $$$.", 
            "rdfs:label": "priceRange", 
            "schema:domain": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:width", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Distance", 
            "rdfs:comment": "The width of the media object.", 
            "rdfs:label": "width", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:Aquarium", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Aquarium.", 
            "rdfs:label": "Aquarium", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:priceValidUntil", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "The date after which the price is no longer available.", 
            "rdfs:label": "priceValidUntil", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:AutoRental", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A car rental business.", 
            "rdfs:label": "AutoRental", 
            "rdfs:subClassOf": "schema:AutomotiveBusiness"
        }, 
        {
            "@id": "schema:TheaterGroup", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A theater group or company—for example, the Royal Shakespeare Company or Druid Theatre.", 
            "rdfs:label": "TheaterGroup", 
            "rdfs:subClassOf": "schema:PerformingGroup"
        }, 
        {
            "@id": "schema:wordCount", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Integer", 
            "rdfs:comment": "The number of words in the text of the Article.", 
            "rdfs:label": "wordCount", 
            "schema:domain": "schema:Article"
        }, 
        {
            "@id": "schema:SelfStorage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Self-storage facility.", 
            "rdfs:label": "SelfStorage", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:addressLocality", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The locality. For example, Mountain View.", 
            "rdfs:label": "addressLocality", 
            "schema:domain": "schema:PostalAddress"
        }, 
        {
            "@id": "schema:ingredients", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "An ingredient used in the recipe.", 
            "rdfs:label": "ingredients", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:ElementarySchool", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An elementary school.", 
            "rdfs:label": "ElementarySchool", 
            "rdfs:subClassOf": "schema:EducationalOrganization"
        }, 
        {
            "@id": "schema:Mass", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Properties that take Mass as values are of the form '<Number> <Mass unit of measure>'. E.g., '7 kg'", 
            "rdfs:label": "Mass", 
            "rdfs:subClassOf": "schema:Quantity"
        }, 
        {
            "@id": "schema:breadcrumb", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A set of links that can help a user understand and navigate a website hierarchy.", 
            "rdfs:label": "breadcrumb", 
            "schema:domain": "schema:WebPage"
        }, 
        {
            "@id": "schema:UserPlusOnes", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: +1.", 
            "rdfs:label": "UserPlusOnes", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:deathDate", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "Date of death.", 
            "rdfs:label": "deathDate", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:sourceOrganization", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "The Organization on whose behalf the creator was working.", 
            "rdfs:label": "sourceOrganization", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:itemListElement", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A single list item.", 
            "rdfs:label": "itemListElement", 
            "schema:domain": "schema:ItemList"
        }, 
        {
            "@id": "schema:WebPage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page", 
            "rdfs:label": "WebPage", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Residence", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The place where a person lives.", 
            "rdfs:label": "Residence", 
            "rdfs:subClassOf": "schema:Place"
        }, 
        {
            "@id": "schema:HinduTemple", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A Hindu temple.", 
            "rdfs:label": "HinduTemple", 
            "rdfs:subClassOf": "schema:PlaceOfWorship"
        }, 
        {
            "@id": "schema:TVSeason", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A TV season.", 
            "rdfs:label": "TVSeason", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Florist", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A florist.", 
            "rdfs:label": "Florist", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:seller", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "The seller of the product.", 
            "rdfs:label": "seller", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:discusses", 
            "@type": "rdf:Property", 
            "schema:range": "schema:CreativeWork", 
            "rdfs:comment": "Specifies the CreativeWork associated with the UserComment.", 
            "rdfs:label": "discusses", 
            "schema:domain": "schema:UserComments"
        }, 
        {
            "@id": "schema:contactPoints", 
            "@type": "rdf:Property", 
            "schema:range": "schema:ContactPoint", 
            "rdfs:comment": "A contact point for a person or organization.", 
            "rdfs:label": "contactPoints", 
            "schema:domain": [
                "schema:Organization", 
                "schema:Person"
            ]
        }, 
        {
            "@id": "schema:printPage", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).", 
            "rdfs:label": "printPage", 
            "schema:domain": "schema:NewsArticle"
        }, 
        {
            "@id": "schema:SearchResultsPage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: Search results page.", 
            "rdfs:label": "SearchResultsPage", 
            "rdfs:subClassOf": "schema:WebPage"
        }, 
        {
            "@id": "schema:founders", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "A person who founded this organization.", 
            "rdfs:label": "founders", 
            "schema:domain": "schema:Organization"
        }, 
        {
            "@id": "schema:numberOfPages", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Integer", 
            "rdfs:comment": "The number of pages in the book.", 
            "rdfs:label": "numberOfPages", 
            "schema:domain": "schema:Book"
        }, 
        {
            "@id": "schema:skills", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Skills required to fulfill this role.", 
            "rdfs:label": "skills", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:DanceEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: A social dance.", 
            "rdfs:label": "DanceEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:copyrightHolder", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "The party holding the legal copyright to the CreativeWork.", 
            "rdfs:label": "copyrightHolder", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:BookStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A bookstore.", 
            "rdfs:label": "BookStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:PerformingGroup", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A performance group, such as a band, an orchestra, or a circus.", 
            "rdfs:label": "PerformingGroup", 
            "rdfs:subClassOf": "schema:Organization"
        }, 
        {
            "@id": "schema:FireStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A fire station. With firemen.", 
            "rdfs:label": "FireStation", 
            "rdfs:subClassOf": [
                "schema:CivicStructure", 
                "schema:EmergencyService"
            ]
        }, 
        {
            "@id": "schema:servingSize", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The serving size, in terms of the number of volume or mass", 
            "rdfs:label": "servingSize", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:copyrightYear", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Number", 
            "rdfs:comment": "The year during which the claimed copyright for the CreativeWork was first asserted.", 
            "rdfs:label": "copyrightYear", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:AccountingService", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Accountancy business.", 
            "rdfs:label": "AccountingService", 
            "rdfs:subClassOf": [
                "schema:FinancialService", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:MediaObject", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An image, video, or audio object embedded in a web page. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).", 
            "rdfs:label": "MediaObject", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:datePublished", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "Date of first broadcast/publication.", 
            "rdfs:label": "datePublished", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Cemetery", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A graveyard.", 
            "rdfs:label": "Cemetery", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:UserPageVisits", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: Visit to a web page.", 
            "rdfs:label": "UserPageVisits", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:JobPosting", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A listing that describes a job opening in a certain organization.", 
            "rdfs:label": "JobPosting", 
            "rdfs:subClassOf": "schema:Intangible"
        }, 
        {
            "@id": "schema:Date", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A date value in ISO 8601 date format.", 
            "rdfs:label": "Date", 
            "rdfs:subClassOf": "schema:DataType"
        }, 
        {
            "@id": "schema:blogPosts", 
            "@type": "rdf:Property", 
            "schema:range": {
                "@id": "schema:BlogPosting", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "A blog post.", 
                "rdfs:label": "BlogPosting", 
                "rdfs:subClassOf": "schema:Article"
            }, 
            "rdfs:comment": "The postings that are part of this blog", 
            "rdfs:label": "blogPosts", 
            "schema:domain": {
                "@id": "schema:Blog", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "A blog", 
                "rdfs:label": "Blog", 
                "rdfs:subClassOf": "schema:CreativeWork"
            }
        }, 
        {
            "@id": "schema:startDate", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "The start date and time of the event (in ISO 8601 date format).", 
            "rdfs:label": "startDate", 
            "schema:domain": [
                "schema:TVSeries", 
                "schema:Event", 
                "schema:TVSeason"
            ]
        }, 
        {
            "@id": "schema:givenName", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the Name property.", 
            "rdfs:label": "givenName", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:reviewRating", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Rating", 
            "rdfs:comment": "The rating given in this review. Note that reviews can themselves be rated. The reviewRating applies to rating given by the review. The aggregateRating property applies to the review itself, as a creative work.", 
            "rdfs:label": "reviewRating", 
            "schema:domain": "schema:Review"
        }, 
        {
            "@id": "schema:ItemList", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A list of items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.", 
            "rdfs:label": "ItemList", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Winery", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A winery.", 
            "rdfs:label": "Winery", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:awards", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Awards won by this person or for this creative work.", 
            "rdfs:label": "awards", 
            "schema:domain": [
                "schema:CreativeWork", 
                "schema:Person"
            ]
        }, 
        {
            "@id": "schema:Airport", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An airport.", 
            "rdfs:label": "Airport", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:RiverBodyOfWater", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A river (for example, the broad majestic Shannon).", 
            "rdfs:label": "RiverBodyOfWater", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:paymentAccepted", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Cash, credit card, etc.", 
            "rdfs:label": "paymentAccepted", 
            "schema:domain": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:seasonNumber", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Integer", 
            "rdfs:comment": "The season number.", 
            "rdfs:label": "seasonNumber", 
            "schema:domain": "schema:TVSeason"
        }, 
        {
            "@id": "schema:incentives", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Description of bonus and commission compensation aspects of the job.", 
            "rdfs:label": "incentives", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:printEdition", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The edition of the print product in which the NewsArticle appears.", 
            "rdfs:label": "printEdition", 
            "schema:domain": "schema:NewsArticle"
        }, 
        {
            "@id": "schema:Embassy", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An embassy.", 
            "rdfs:label": "Embassy", 
            "rdfs:subClassOf": "schema:GovernmentBuilding"
        }, 
        {
            "@id": "schema:FoodEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Food event.", 
            "rdfs:label": "FoodEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:proteinContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of protein.", 
            "rdfs:label": "proteinContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:Preschool", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A preschool.", 
            "rdfs:label": "Preschool", 
            "rdfs:subClassOf": "schema:EducationalOrganization"
        }, 
        {
            "@id": "schema:OutletStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An outlet store.", 
            "rdfs:label": "OutletStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:longitude", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Number", 
                "schema:Text"
            ], 
            "rdfs:comment": "The longitude of a location. For example -122.08585.", 
            "rdfs:label": "longitude", 
            "schema:domain": "schema:GeoCoordinates"
        }, 
        {
            "@id": "schema:LodgingBusiness", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A lodging business, such as a motel, hotel, or inn.", 
            "rdfs:label": "LodgingBusiness", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:episodes", 
            "@type": "rdf:Property", 
            "schema:range": "schema:TVEpisode", 
            "rdfs:comment": "The episode of a TV series or season.", 
            "rdfs:label": "episodes", 
            "schema:domain": [
                "schema:TVSeries", 
                "schema:TVSeason"
            ]
        }, 
        {
            "@id": "schema:video", 
            "@type": "rdf:Property", 
            "schema:range": "schema:VideoObject", 
            "rdfs:comment": "An embedded video object.", 
            "rdfs:label": "video", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:RecyclingCenter", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A recycling center.", 
            "rdfs:label": "RecyclingCenter", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:TVEpisode", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An episode of a TV series or season.", 
            "rdfs:label": "TVEpisode", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Painting", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A painting.", 
            "rdfs:label": "Painting", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:videoQuality", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The quality of the video.", 
            "rdfs:label": "videoQuality", 
            "schema:domain": "schema:VideoObject"
        }, 
        {
            "@id": "schema:Hospital", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A hospital.", 
            "rdfs:label": "Hospital", 
            "rdfs:subClassOf": [
                "schema:CivicStructure", 
                "schema:EmergencyService", 
                "schema:MedicalOrganization"
            ]
        }, 
        {
            "@id": "schema:Festival", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Festival.", 
            "rdfs:label": "Festival", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:foundingDate", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "The date that this organization was founded.", 
            "rdfs:label": "foundingDate", 
            "schema:domain": "schema:Organization"
        }, 
        {
            "@id": "schema:sodiumContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of milligrams of sodium.", 
            "rdfs:label": "sodiumContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:alternativeHeadline", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A secondary title of the CreativeWork.", 
            "rdfs:label": "alternativeHeadline", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:UserBlocks", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: Block this content.", 
            "rdfs:label": "UserBlocks", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:EventVenue", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An event venue.", 
            "rdfs:label": "EventVenue", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:Waterfall", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A waterfall, like Niagara", 
            "rdfs:label": "Waterfall", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:menu", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:URL", 
                "schema:Text"
            ], 
            "rdfs:comment": "Either the actual menu or a URL of the menu.", 
            "rdfs:label": "menu", 
            "schema:domain": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:educationRequirements", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Educational background needed for the position.", 
            "rdfs:label": "educationRequirements", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:ShoppingCenter", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A shopping center or mall.", 
            "rdfs:label": "ShoppingCenter", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:CatholicChurch", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A Catholic church.", 
            "rdfs:label": "CatholicChurch", 
            "rdfs:subClassOf": "schema:PlaceOfWorship"
        }, 
        {
            "@id": "schema:fileSize", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Integer", 
            "rdfs:comment": "Size of the application / package in bytes.", 
            "rdfs:label": "fileSize", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:MobilePhoneStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A mobile-phone store.", 
            "rdfs:label": "MobilePhoneStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:workHours", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).", 
            "rdfs:label": "workHours", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:Casino", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A casino.", 
            "rdfs:label": "Casino", 
            "rdfs:subClassOf": "schema:EntertainmentBusiness"
        }, 
        {
            "@id": "schema:containedIn", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Place", 
            "rdfs:comment": "The basic containment relation between places.", 
            "rdfs:label": "containedIn", 
            "schema:domain": "schema:Place"
        }, 
        {
            "@id": "schema:experienceRequirements", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Description of skills and experience needed for the position.", 
            "rdfs:label": "experienceRequirements", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:ClothingStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A clothing store.", 
            "rdfs:label": "ClothingStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:MusicGroup", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.", 
            "rdfs:label": "MusicGroup", 
            "rdfs:subClassOf": "schema:PerformingGroup"
        }, 
        {
            "@id": "schema:AmusementPark", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An amusement park.", 
            "rdfs:label": "AmusementPark", 
            "rdfs:subClassOf": "schema:EntertainmentBusiness"
        }, 
        {
            "@id": "schema:HVACBusiness", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An HVAC service.", 
            "rdfs:label": "HVACBusiness", 
            "rdfs:subClassOf": "schema:HomeAndConstructionBusiness"
        }, 
        {
            "@id": "schema:publisher", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "The publisher of the creative work.", 
            "rdfs:label": "publisher", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:TaxiStand", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A taxi stand.", 
            "rdfs:label": "TaxiStand", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:State", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A state or province.", 
            "rdfs:label": "State", 
            "rdfs:subClassOf": "schema:AdministrativeArea"
        }, 
        {
            "@id": "schema:Playground", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A playground.", 
            "rdfs:label": "Playground", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:thumbnailUrl", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "A thumbnail image relevant to the Thing.", 
            "rdfs:label": "thumbnailUrl", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Motel", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A motel.", 
            "rdfs:label": "Motel", 
            "rdfs:subClassOf": "schema:LodgingBusiness"
        }, 
        {
            "@id": "schema:relatedTo", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "The most generic familial relation.", 
            "rdfs:label": "relatedTo", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:AggregateRating", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The average rating based on multiple ratings or reviews.", 
            "rdfs:label": "AggregateRating", 
            "rdfs:subClassOf": "schema:Rating"
        }, 
        {
            "@id": "schema:MovingCompany", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A moving company.", 
            "rdfs:label": "MovingCompany", 
            "rdfs:subClassOf": "schema:HomeAndConstructionBusiness"
        }, 
        {
            "@id": "schema:countriesSupported", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Countries that allow the application.", 
            "rdfs:label": "countriesSupported", 
            "schema:domain": "schema:MobileSoftwareApplication"
        }, 
        {
            "@id": "schema:parents", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "A parents of the person.", 
            "rdfs:label": "parents", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:itemConditionDeprecated", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Thing", 
            "rdfs:comment": "The condition of the item for sale—for example New, Refurbished, Used, etc.", 
            "rdfs:label": "itemConditionDeprecated", 
            "schema:domain": "schema:Offer"
        }, 
        {
            "@id": "schema:dateline", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The location where the NewsArticle was produced.", 
            "rdfs:label": "dateline", 
            "schema:domain": "schema:NewsArticle"
        }, 
        {
            "@id": "schema:ChildrensEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Children's event.", 
            "rdfs:label": "ChildrensEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:headline", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Headline of the article", 
            "rdfs:label": "headline", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:BusinessEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Business event.", 
            "rdfs:label": "BusinessEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:WebPageElement", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A web page element, like a table or an image", 
            "rdfs:label": "WebPageElement", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:ChildCare", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A Childcare center.", 
            "rdfs:label": "ChildCare", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:Landform", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.", 
            "rdfs:label": "Landform", 
            "rdfs:subClassOf": "schema:Place"
        }, 
        {
            "@id": "schema:inLanguage", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The language of the content. please use one of the language codes from the IETF BCP 47 standard.", 
            "rdfs:label": "inLanguage", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:nutrition", 
            "@type": "rdf:Property", 
            "schema:range": "schema:NutritionInformation", 
            "rdfs:comment": "Nutrition information about the recipe.", 
            "rdfs:label": "nutrition", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:expires", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Date", 
            "rdfs:comment": "Date the content expires and is no longer useful or available. Useful for videos.", 
            "rdfs:label": "expires", 
            "schema:domain": "schema:MediaObject"
        }, 
        {
            "@id": "schema:BeautySalon", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Beauty salon.", 
            "rdfs:label": "BeautySalon", 
            "rdfs:subClassOf": "schema:HealthAndBeautyBusiness"
        }, 
        {
            "@id": "schema:softwareVersion", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Version of the software instance.", 
            "rdfs:label": "softwareVersion", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:name", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The name of the item.", 
            "rdfs:label": "name", 
            "schema:domain": "schema:Thing"
        }, 
        {
            "@id": "schema:industry", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The industry associated with the job position.", 
            "rdfs:label": "industry", 
            "schema:domain": "schema:JobPosting"
        }, 
        {
            "@id": "schema:BusStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A bus station.", 
            "rdfs:label": "BusStation", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:Locksmith", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A locksmith.", 
            "rdfs:label": "Locksmith", 
            "rdfs:subClassOf": [
                "schema:HomeAndConstructionBusiness", 
                "schema:ProfessionalService"
            ]
        }, 
        {
            "@id": "schema:ParkingFacility", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A parking lot or other parking facility.", 
            "rdfs:label": "ParkingFacility", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:maps", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "A URL to a map of the place.", 
            "rdfs:label": "maps", 
            "schema:domain": "schema:Place"
        }, 
        {
            "@id": "schema:contactType", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.", 
            "rdfs:label": "contactType", 
            "schema:domain": "schema:ContactPoint"
        }, 
        {
            "@id": "schema:Organization", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An organization such as a school, NGO, corporation, club, etc.", 
            "rdfs:label": "Organization", 
            "rdfs:subClassOf": "schema:Thing"
        }, 
        {
            "@id": "schema:fileFormat", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "MIME format of the binary (e.g. application/zip).", 
            "rdfs:label": "fileFormat", 
            "schema:domain": "schema:SoftwareApplication"
        }, 
        {
            "@id": "schema:HighSchool", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A high school.", 
            "rdfs:label": "HighSchool", 
            "rdfs:subClassOf": "schema:EducationalOrganization"
        }, 
        {
            "@id": "schema:productID", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The product identifier, such as ISBN. For example: <meta itemprop='productID' content='isbn:123-456-789'/>.", 
            "rdfs:label": "productID", 
            "schema:domain": "schema:Product"
        }, 
        {
            "@id": "schema:contributor", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:Organization", 
                "schema:Person"
            ], 
            "rdfs:comment": "A secondary contributor to the CreativeWork.", 
            "rdfs:label": "contributor", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:GeoCoordinates", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The geographic coordinates of a place or event.", 
            "rdfs:label": "GeoCoordinates", 
            "rdfs:subClassOf": "schema:StructuredValue"
        }, 
        {
            "@id": "schema:CheckoutPage", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: Checkout page.", 
            "rdfs:label": "CheckoutPage", 
            "rdfs:subClassOf": "schema:WebPage"
        }, 
        {
            "@id": "schema:MusicVenue", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A music venue.", 
            "rdfs:label": "MusicVenue", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:AutomotiveBusiness", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Car repair, sales, or parts.", 
            "rdfs:label": "AutomotiveBusiness", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:Pharmacy", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A pharmacy or drugstore.", 
            "rdfs:label": "Pharmacy", 
            "rdfs:subClassOf": "schema:MedicalOrganization"
        }, 
        {
            "@id": "schema:comment", 
            "@type": "rdf:Property", 
            "schema:range": "schema:UserComments", 
            "rdfs:comment": "Comments, typically from users, on this CreativeWork.", 
            "rdfs:label": "comment", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:OceanBodyOfWater", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An ocean (for example, the Pacific).", 
            "rdfs:label": "OceanBodyOfWater", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:BowlingAlley", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A bowling alley.", 
            "rdfs:label": "BowlingAlley", 
            "rdfs:subClassOf": "schema:SportsActivityLocation"
        }, 
        {
            "@id": "schema:ImageGallery", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Web page type: Image gallery page.", 
            "rdfs:label": "ImageGallery", 
            "rdfs:subClassOf": "schema:CollectionPage"
        }, 
        {
            "@id": "schema:UserDownloads", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: Download of an item.", 
            "rdfs:label": "UserDownloads", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }, 
        {
            "@id": "schema:MedicalOrganization", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A medical organization, such as a doctor's office or clinic.", 
            "rdfs:label": "MedicalOrganization", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:NightClub", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A nightclub or discotheque.", 
            "rdfs:label": "NightClub", 
            "rdfs:subClassOf": "schema:EntertainmentBusiness"
        }, 
        {
            "@id": "schema:PawnShop", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A pawnstore.", 
            "rdfs:label": "PawnShop", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:Offer", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An offer to sell an item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
            "rdfs:label": "Offer", 
            "rdfs:subClassOf": "schema:Intangible"
        }, 
        {
            "@id": "schema:articleSection", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.", 
            "rdfs:label": "articleSection", 
            "schema:domain": "schema:Article"
        }, 
        {
            "@id": "schema:usageTermsDeprecated", 
            "@type": "rdf:Property", 
            "schema:range": [
                "schema:URL", 
                "schema:Text"
            ], 
            "rdfs:comment": "A statement about the usage terms pertaining to the CreativeWork.", 
            "rdfs:label": "usageTermsDeprecated", 
            "schema:domain": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:Product", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A product is anything that is made available for sale—for example, a pair of shoes, a concert ticket, or a car.", 
            "rdfs:label": "Product", 
            "rdfs:subClassOf": "schema:Thing"
        }, 
        {
            "@id": "schema:ComedyEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Comedy event.", 
            "rdfs:label": "ComedyEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:InternetCafe", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An internet cafe.", 
            "rdfs:label": "InternetCafe", 
            "rdfs:subClassOf": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:TrainStation", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A train station.", 
            "rdfs:label": "TrainStation", 
            "rdfs:subClassOf": "schema:CivicStructure"
        }, 
        {
            "@id": "schema:SocialEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Social event.", 
            "rdfs:label": "SocialEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:PostalAddress", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "The mailing address.", 
            "rdfs:label": "PostalAddress", 
            "rdfs:subClassOf": "schema:ContactPoint"
        }, 
        {
            "@id": "schema:totalTime", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Duration", 
            "rdfs:comment": "The total time it takes to prepare and cook the recipe, in ISO 8601 duration format.", 
            "rdfs:label": "totalTime", 
            "schema:domain": "schema:Recipe"
        }, 
        {
            "@id": "schema:Brewery", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Brewery.", 
            "rdfs:label": "Brewery", 
            "rdfs:subClassOf": "schema:FoodEstablishment"
        }, 
        {
            "@id": "schema:carbohydrateContent", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Mass", 
            "rdfs:comment": "The number of grams of carbohydrates.", 
            "rdfs:label": "carbohydrateContent", 
            "schema:domain": "schema:NutritionInformation"
        }, 
        {
            "@id": "schema:knows", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "The most generic bi-directional social/work relation.", 
            "rdfs:label": "knows", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:familyName", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the Name property.", 
            "rdfs:label": "familyName", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:DefenceEstablishment", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A defence establishment, such as an army or navy base.", 
            "rdfs:label": "DefenceEstablishment", 
            "rdfs:subClassOf": "schema:GovernmentBuilding"
        }, 
        {
            "@id": "schema:Church", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A church.", 
            "rdfs:label": "Church", 
            "rdfs:subClassOf": "schema:PlaceOfWorship"
        }, 
        {
            "@id": "schema:LiquorStore", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A liquor store.", 
            "rdfs:label": "LiquorStore", 
            "rdfs:subClassOf": "schema:Store"
        }, 
        {
            "@id": "schema:Pond", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A pond", 
            "rdfs:label": "Pond", 
            "rdfs:subClassOf": "schema:BodyOfWater"
        }, 
        {
            "@id": "schema:LiteraryEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Literary event.", 
            "rdfs:label": "LiteraryEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:SportsClub", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A sports club.", 
            "rdfs:label": "SportsClub", 
            "rdfs:subClassOf": "schema:SportsActivityLocation"
        }, 
        {
            "@id": "schema:representativeOfPage", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Boolean", 
            "rdfs:comment": "Indicates whether this image is representative of the content of the page.", 
            "rdfs:label": "representativeOfPage", 
            "schema:domain": "schema:ImageObject"
        }, 
        {
            "@id": "schema:browsers", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "One or more browsers required to run the app.", 
            "rdfs:label": "browsers", 
            "schema:domain": {
                "@id": "schema:WebApplication", 
                "@type": "rdfs:Class", 
                "rdfs:comment": "Web applications.", 
                "rdfs:label": "WebApplication", 
                "rdfs:subClassOf": "schema:SoftwareApplication"
            }
        }, 
        {
            "@id": "schema:SportsEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Sports event.", 
            "rdfs:label": "SportsEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:CollegeOrUniversity", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A college, university, or other third-level educational institution.", 
            "rdfs:label": "CollegeOrUniversity", 
            "rdfs:subClassOf": "schema:EducationalOrganization"
        }, 
        {
            "@id": "schema:articleBody", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Text", 
            "rdfs:comment": "The actual body of the article.", 
            "rdfs:label": "articleBody", 
            "schema:domain": "schema:Article"
        }, 
        {
            "@id": "schema:children", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Person", 
            "rdfs:comment": "A child of the person.", 
            "rdfs:label": "children", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:HairSalon", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "A hair salon.", 
            "rdfs:label": "HairSalon", 
            "rdfs:subClassOf": "schema:HealthAndBeautyBusiness"
        }, 
        {
            "@id": "schema:Article", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.", 
            "rdfs:label": "Article", 
            "rdfs:subClassOf": "schema:CreativeWork"
        }, 
        {
            "@id": "schema:branchOf", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "The larger organization that this local business is a branch of, if any.", 
            "rdfs:label": "branchOf", 
            "schema:domain": "schema:LocalBusiness"
        }, 
        {
            "@id": "schema:TheaterEvent", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "Event type: Theater performance.", 
            "rdfs:label": "TheaterEvent", 
            "rdfs:subClassOf": "schema:Event"
        }, 
        {
            "@id": "schema:episodeNumber", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Number", 
            "rdfs:comment": "The episode number.", 
            "rdfs:label": "episodeNumber", 
            "schema:domain": "schema:TVEpisode"
        }, 
        {
            "@id": "schema:worksFor", 
            "@type": "rdf:Property", 
            "schema:range": "schema:Organization", 
            "rdfs:comment": "Organizations that the person works for.", 
            "rdfs:label": "worksFor", 
            "schema:domain": "schema:Person"
        }, 
        {
            "@id": "schema:replyToUrl", 
            "@type": "rdf:Property", 
            "schema:range": "schema:URL", 
            "rdfs:comment": "The URL at which a reply may be posted to the specified UserComment.", 
            "rdfs:label": "replyToUrl", 
            "schema:domain": "schema:UserComments"
        }, 
        {
            "@id": "schema:UserTweets", 
            "@type": "rdfs:Class", 
            "rdfs:comment": "User interaction: Tweets.", 
            "rdfs:label": "UserTweets", 
            "rdfs:subClassOf": "schema:UserInteraction"
        }
    ]
}
