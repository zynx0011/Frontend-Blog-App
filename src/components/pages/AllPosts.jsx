import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../index";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { API_URL } from "../../config";
import { useQuery } from "@tanstack/react-query";

function AllPosts() {
  //

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/v1/listing/get`, {
        withCredentials: true,
      });
      return res.data?.data;
    } catch (error) {
      console.log(error, "error in allposts");
    }
  };

  const { data: posts, isLoading } = useQuery({
    queryKey: ["all-posts"],
    queryFn: fetchPosts,
    staleTime: 6000 * 4,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-white min-h-screen">
        <Box>
          <CircularProgress />
        </Box>
      </div>
    );
  }

  if (posts) {
    return (
      <div className="p-7">
        <h1 className="text-4xl font-bold text-center text-white  ">
          All Posts
        </h1>
        <div className="w-full py-8 ">
          <Container>
            <div className="flex flex-wrap">
              {posts.map((post) => (
                <div key={post._id} className="p-2 sm:w-[50%]">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
export default AllPosts;
