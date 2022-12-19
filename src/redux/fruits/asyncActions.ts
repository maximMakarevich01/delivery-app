import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Fruits, SearchFruitsParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const fetchFruits = createAsyncThunk<Fruits[], SearchFruitsParams>(
  "fruits/fetchFruitsStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    console.log(params, 4444);
    const { data } = await axios.get<Fruits[]>(
      `https://638c7706eafd555746a6f3d9.mockapi.io/items`,
      {
        params: pickBy(
          {
            page: currentPage,
            limit: 4,
            category,
            sortBy,
            order,
            search,
          },
          identity
        ),
      }
    );

    return data;
  }
);
