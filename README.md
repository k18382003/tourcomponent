# Tour Cards

### Learning Goal
Understand how React UseEffect() works. And also, understand how to use Short-Circuit Evaluation and Ternary Operator in React.

## Steps

#### Create an external Interface object Tour

```jsx
export default interface Tour {
    id : string,
    name : string,
    info : string,
    image : string,
    price : string
}
```
Not to repeat yourself, we can create an external object in the project. 
And simply import it when we need it.

#### Setup State Variable

```jsx
const [loading, setLoading] = useState(true);
const [tourData, setTourData] = useState([{
    id : "",
    name : "",
    info : "",
    image : "",
    price : ""
  }]);
```
loading is storing the data-fetching state. If it's still fetching the data which is true, and vice versa. 
tourData is storing the fetched data.

#### Fetch Data

Declare a data source, and create a fetch function.
```jsx
const tourDataUrl = "https://course-api.com/react-tours-project";

const fetchTours = async() => {
    try {
      var tours = await fetch(tourDataUrl);
      var jsonTours = await tours.json();
      setTourData(jsonTours);
    } catch (error) {
      console.log(error);
      return <h1>Oops! Something went wrong. Please refresh the page.</h1>
    }
    setLoading(false);
  }
```
Once the fetching is completed, we can set our loading state to false.

#### UseEffect()

```jsx
useEffect(() => {
    fetchTours();
  }, [])
```
We want to fetch the data at the initial loading, so the second parameter of useEffect we need to give an empty array.

#### Page loading status
```jsx
  if (loading) return <Loading />;
```

```jsx
export default function Loading() {
    return (
        <div className="loading-container">
            <div className="loading"></div>
        </div>
    )
}
```
return a Loading component if we are still fetching the data.

#### Iterate and Render and diplay by nested components

Same as the Birthday List project. 
Display the number of items in the tourData by using the length property of the state variable. To render the list of tour, iterate over the data array using the map method. 
Create a Tours component to hold the rendered items and they also contain the list of Tour components.
Create a Tour component to render the information of the tour's details.
We should passing People object as a prop from the parent to each child component.

#### Remove tour function

```jsx
const removeTour = (id: string) => {
  var newTours = tourData.filter(t => t.id !== id);
  setTourData(newTours);
}
```
Use filter function to remove the not interested tour, and set our TourData to the filtered list.

#### Short Circuit and Ternary Operator

Use the ternary operator to achieve showing content by conditions.
If readMore is true then we show the full content, otherwise just show the first 200 words.
```jsx
 <div className="tour-info">
      <h5 className="tour-title">{tour.name}</h5>
      <p>{readMore ? tour.info : `${tour.info.substring(0, 200) + "..."}`}
          <span className="info-btn" onClick={() => setReadMore(!readMore)}>
              {readMore ? " Read Less" : "Read More"}
          </span>
      </p>
  </div>
```

By the rule of short-circuit evaluation, the && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".
```jsx
<div className='title'>
  <h3>Summer Tours</h3>
  <div className="title-underline"></div>
  {tourData.length === 0 &&
    <button className="btn" style={{marginTop: '1rem'}} onClick={fetchTours}>Refresh</button> 
  }
</div>
```

##### Learning source 
https://www.udemy.com/course/react-tutorial-and-projects-course/?kw=React+18+tu&src=sac#
