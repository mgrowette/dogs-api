# Dogs API

The dogs api tracks dogs and their associated breeds via [`/dogs`](#dogs) and [`/breeds`](#breeds) endpoints.  It is a RESTful HTTP based api using JSON to represent the dogs and breeds.

## Getting Started

## HTTP Verbs

The dogs api allows the following HTTP verbs. :

- `GET`
- `POST`
- `PUT`
- `DELETE`

## Endpoints

## Dogs

## Create a dog

Create a dog via a `POST` to the `/dogs` route passing a dog JSON object in the request body. 

All fields are required fields including `name`, `age`, `gender`, `color`, `breedId`.

```
POST /dogs

{
  "name": "Tucker T",
  "age": 9,
  "gender": "male",
  "color": "brown"
  "breedId": "breed_hound"
}
```

A successfully created dog will result in a `201 - Created` response code and a response body which includes an `id`, `rev`, and `ok` properties.  

```
{
  "ok": true,
  "id": "dog_tucker-t",
  "rev": "1-A6157A5EA545C99B00FF904EEF05FD9F"
}
```

## Get a dog  

Retrieves a single dog from the collection of dogs using a `GET` to the `/dogs/:id` route.

```
GET /dogs/dog_tucker-t
```

A successful response will result in a `200 - OK` response code and the dog will be returned in the response body:

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

## Update a dog

Updates a dog within the collection of dogs via a `PUT` to the `/dogs/:id` route by completely replacing the dog. Provide a representation of a dog in the request body.  

> Tip:  Be sure to provide the most recent `_rev` value in the request body. Otherwise, you will receive an `409 - Conflict` error. 

All fields are required fields including `_id`, `_rev`, `name`, `age`, `gender`, `color`, `breedId`, `type`.

```
PUT /dogs/dog_tucker-t

{
  "_id": "dog_tucker-t",
  "_rev": "1-sdklfjkl3492492iwjer9wu"
  "name": "Tucker T",
  "age": 10,
  "gender": "male",
  "color": "brown"
  "breedId": "breed_hound",
  "type": "dog"
}
```

A successfully updated dog will result in a `200 - OK` response code and a response body which includes an `id`, `rev`, and `ok` properties.  A successful response would include an updated `rev` value.

```
{
  "ok": true,
  "id": "dog_tucker-t",
  "rev": "2-A7157A5EA545C99B00FF904EEF05FGGG"
}
```

## Delete a dog

Delete a dog from the collection of dogs via a `DELETE` to the `/dogs/:id` route. 

```
DELETE /dogs/dog_tucker-t
```

A successful response would result in a `200 - OK`.  The response body will contain the following:

```
{
  "ok": true,
  "id": "dog_tucker-t",
  "rev": "2-9AF304BE281790604D1D8A4B0F4C9ADB"
}
```






## Breeds

## Create a breed

Create a dog via a `POST` to the `/breeds` route passing a breed JSON object in the request body. 

All fields are required fields including `name`, `desc`, and `country`.

```
POST /breeds

{
  "name": "German Shepherd",
  "desc": "The German Shepherd Dog is one of America's most popular dog breeds — for good reason. He's an intelligent and capable working dog. His devotion and courage are unmatched. And he's amazingly versatile, excelling at most anything he's trained to do: guide and assistance work for the handicapped, police and military.",
  "country": "Germany"
}
```

A successfully created breed will result in a `201 - Created` response code and a response body which includes an `id`, `rev`, and `ok` properties.  

```
{
  "ok": true,
  "id": "breed_german-shepherd",
  "rev": "1-A7157A5EA545C99B00FF904EEF05FDFD9"
}
```


## Get a breed  

Retrieves a single breed from the collection of breeds using a `GET` to the `/breeds/:id` route.

```
GET /breeds/breed_german-shepherd
```

A successful response will result in a `200 - OK` response code and the breed will be returned in the response body:

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


## Update a breed

Updates a dog within the collection of dogs via a `PUT` to the `/dogs/:id` route by completely replacing the dog. Provide a representation of a dog in the request body.  

> Tip:  Be sure to provide the most recent `_rev` value in the request body. Otherwise, you will receive an `409 - Conflict` error. 

All fields are required fields including `_id`, `_rev`, `name`, `desc`, `country`, `type`.

```
PUT /breeds/breed_german-shepherd

{
  "_id": "breed_german-shepherd",
  "_rev": "1-kej3jwkd3343k4jksjskr"
  "name": "German Shepherd",
  "desc": "The German Shepherd Dog is great.",
  "country": "Germany",
  "type": "breed"
}
```

A successfully updated breed will result in a `200 - OK` response code and a response body which includes an `id`, `rev`, and `ok` properties.  A successful response would include an updated `rev` value.

```
{
  "ok": true,
  "id": "breed_german-shepherd",
  "rev": "2-A7157A5EA545C99B00FF904EEF05FDFD9"
}
```

## Delete a breed

Delete a breed from the collection of breeds via a `DELETE` to the `/breeds/:id` route. 

```
DELETE /breeds/breed_german-shepherd
```

A successful response would result in a `200 - OK`.  The response body will contain the following:

```
{
  "ok": true,
  "id": "breed_german-shepherd",
  "rev": "2-dfsd4425fdsdfwesdfsdf"
}
```
