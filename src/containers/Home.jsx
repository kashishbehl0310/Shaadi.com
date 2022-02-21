import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import fetchUsers from "../api";
import Header from "../components/Header";
import LoadingSkeletonCard from "../components/LoadingSkeletonCard";
import PageContainer from "../components/PageContainer";
import UserComponent from "../components/UserComponent";

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = (props) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);

  const [loading, setLoading] = useState(false);
  const loader = useRef(null);
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  const handleGetUsers = () => {
    fetchUsers((err, res) => {
      if (err) {
        return
      };
      if (res && res.data && res.data.length > 0) {
        setResults([...results, ...res.data]);
        setLoading(false);
      }
      if (res.total_pages < page) {
        setLoading(false);
        console.log(res.total_pages, page);
      }
    }, {
      page
    })
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      handleGetUsers();
    }, 2000)
  }, [page]);
  return (
    <PageContainer>
      <Header history={props.history} />
      <div
         style={{
          width: "100%",
          height: "calc(100% - 80px)",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            padding: "48px",
            overflowY: "scroll",
            backgroundColor: "#f5f5f5",
            boxSizing: "border-box",
          }}
        >
        {
          results && results.length > 0
            ? <FlexContainer>
              {
                results.map((user, i) => (
                <UserComponent key={i} user={user}/>
                ))
              }
            </FlexContainer>
            : null
          }
          {
            loading
            ? <FlexContainer>
              {
                [1,2,3].map((i) => (
                  <LoadingSkeletonCard key={i} />
                ))
              }
            </FlexContainer>
            : null
          }
          <div ref={loader} />
        </div>
      </div>
    </PageContainer>
  )
}

export default Home;