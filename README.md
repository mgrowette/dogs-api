# Dogs API

The dogs api tracks dogs and their associated breeds via `/dogs` and `/breeds` endpoints.  It is a RESTful HTTP based api using JSON to represent the dogs and breeds. 

## Getting Started

## HTTP Verbs

The dogs api allows the following HTTP verbs:

- `GET`
- `POST`
- `PUT`
- `DELETE`

## Endpoints

## Dogs

## Create a dog

Create a dog via a `POST` to the `/dogs` route passing a dog JSON object in the request body. 

```
POST /dogs

{
  "name": "Tucker T",
  "age": 9,
  "gender": "male",
  "color": "brown"
  "breedId": "breed_hound",
  "type": "dog"
}
```

A successfully created dog will result in a `201 - Created` response and the dog document will be returned in the response body.  The response body will include an `_id` and `_rev` properties.  

```
{
  "_id": "dog_tucker-t",
  "_rev": "1-sdklfjkl3492492iwjer9wu"
  "name": "Tucker T",
  "age": 9,
  "gender": "male",
  "color": "brown"
  "breedId": "breed_hound",
  "type": "dog"
}
```


## Create a breed

Create a dog via a `POST` to the `/breeds` route passing a breed JSON object in the request body. 

```
POST /breeds

{
  "name": "German Shepherd",
  "desc": "The German Shepherd Dog is one of America's most popular dog breeds — for good reason. He's an intelligent and capable working dog. His devotion and courage are unmatched. And he's amazingly versatile, excelling at most anything he's trained to do: guide and assistance work for the handicapped, police and military.",
  "country": "Germany",
  "type": "breed"
}
```

A successfully created breed will result in a `201 - Created` response and the breed document will be returned in the response body.  The response body will include an `_id` and `_rev` properties.  

```
{
  "_id": "breed_german-shepherd",
  "_rev": "1-kej3jwkd3343k4jksjskr"
  "name": "German Shepherd",
   "desc": "The German Shepherd Dog is one of America's most popular dog breeds — for good reason. He's an intelligent and capable working dog. His devotion and courage are unmatched. And he's amazingly versatile, excelling at most anything he's trained to do: guide and assistance work for the handicapped, police and military.",
  "country": "Germany",
  "type": "breed"
}
```

