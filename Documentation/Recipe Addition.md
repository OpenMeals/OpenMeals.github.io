
# Recipe Addition

#### Template

```yaml

Name : <Recipe Name>

Tags:
    - ...
    - ...

Ingredients:
    - ...
    - ...

Steps:
    - ...
    - ...

```

#### Units

- Temperature is measured in **Kelvin**.

    *On the website users can choose their preferred* <br>
    *unit which is then automatically calculated.*

---

## Tags

- `Appetizer`
- `Side Dish`
- `Main Dish`
- `Vegetarian`
- `Vegan`

---

## Ingredient

```yaml
Name : <Name>
Type : <Type>       # Optional
Form : <Form>       # Optional
Amount : <Amount>   # Optional
```

---

## Steps

```yaml
Type : <Type>
...             # Type Specific Data
```

### Generic Tags

#### With

Use this tag to describe assistant ingredients involved <br>
in a step, such as `Oil` while `Heating` an `Ingredient`.

#### As

Designate the product of the current step as <br>
a specific part of the dish, such as `Sauce`.

##### Examples
- `Sauce`
- `Dressing`

#### Note

Notes can be added to any step.

*They should only be used if the current* <br>
*format can't properly describe the action.*

### Type

#### Preheat

```yaml
Type : Preheat
Tool : <Tool>
Temperature : <Temperature>     # Optional
```

#### Refine

```yaml
Type : Refine
Ingredient : <Ingredient>
Method : <Method>               # Optional
Description : <Description>     # Optional
```

#### Combine

```yaml
Type : Combine
Ingredients : <Ingredients>
```

#### Heat

```yaml
Type : Heat
Method : Roast
Degree : Crispy                 # Optional
```

#### Chill

```yaml
Type : Chill
Ingredients : <Ingredients>
```

#### Cook

```yaml
Type : Cook
Ingredient : <Ingredient>
```

#### Store

```yaml
Type : Store
Ingredient : <Ingredient>
```
