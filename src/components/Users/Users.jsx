import React from "react";
import classes from "./Users.module.css";
import Pagination from "../common/pagination";
import User from "./User";

let Users = ({
  users,
  followingInProgress,
  unFollow,
  follow,
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  return (
    <div>
      <div className={classes.users}>
        {users.map((u) => (
          <User
            key={u.id}
            users={u}
            followingInProgress={followingInProgress}
            unFollow={unFollow}
            follow={follow}
          />
        ))}
      </div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
    </div>
  );
};

export default Users;
