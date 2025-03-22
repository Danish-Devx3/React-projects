import { use, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredList, setFilteredList] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");


  const filterData = (category) => {
    setSelectedBtn(category);
    if(category === "all"){
      setFilteredList(data);
      setSelectedBtn("all");
      return
    }

    const filter = data?.filter((item) => {
      return item.type === category;
    });
    setFilteredList(filter);
    setSelectedBtn(item.type);
  }


  const fetchData = async () => {
    setLoading(true);
   try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    setFilteredList(data);
    setData(data);
    setLoading(false);
   }catch (error){
    console.log(error);
   }
  }

  useEffect(() => {
    fetchData();
  }
  , []);

  if(loading){
    return <p>Loading...</p>
  }
  if(!data){
    return <p>No data found
    </p>
  }


  const searchFood = (e) => {
    const searchValue = e.target.value;
   
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredList(filteredData);
  }

  const filterBtns = ["all", "breakfast", "lunch", "dinner"];
  
  return <>
    <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Foody Zone.svg" alt="" />
          </div>

          <div className="search">
            <input onChange={searchFood} type="text" placeholder="Search Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          {
            filterBtns.map((item) => {
              return <Button isSelected={selectedBtn===item} key={item} onClick={() => filterData(item)}>{item.toLocaleUpperCase()}</Button>
            })
          }
        </FilterContainer>

    </Container>
       <SearchResult data={filteredList} />

  </>;
};

export default App;

export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;

`;
const TopContainer = styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
align-items: center;
padding:16px;

 .search{
  input{
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 16px;
    }

    &::placeholder{
      color: white;
    }
 }

 @media (0<width < 600px){
  flex-direction: column;
  height: 80px;
  gap: 4px;
 }
`;

const FilterContainer = styled.section`
display: flex;
justify-content: center;
gap: 12px;
padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${({isSelected})=> (isSelected ? "#f22f3f" : "#ff4343")};
  outline: 1px solid ${({isSelected})=> (isSelected ? "white" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #f22f2f;
  }
`;

