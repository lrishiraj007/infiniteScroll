import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
import "../Infinitescroll/infinitescroll.css";

export default function InfiniteScrollNoLibrary() {
  const [randomUserList, setRandomUserList] = useState([]);
  const [users, setUsers] = useState(10);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        loadUserList(users);
      }
    }
  };

  useEffect(() => {
    loadUserList(users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUserList = (users) => {
    setLoading(true);
    setTimeout(() => {
      UserService.getRandomUsers(users)
        .then((res) => {
          const newUserCounts = users + 10;
          const newList = randomUserList.concat(res.results);
          setRandomUserList(newList);
          setUsers(newUserCounts);
          if (res.results.length === 0) setNoData(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);
  };

  return (
    <div>
      <div className="section">
        {randomUserList.map((user, i) => (
          <div className="box m-3 user" key={i}>
            <div className="row">
              <div className="col-3">
                <img src={user.picture.medium} alt={user.name.first} />
              </div>
              <div className="col-9">
                <div className="user-details">
                  <strong>
                    {user.name.first} {user.name.last}
                  </strong>
                  <br />
                  {user.email}
                </div>
              </div>
            </div>
          </div>
        ))}
        {loading ? (
          <div className="text-center">
            <div className="loader4"></div>
          </div>
        ) : (
          ""
        )}
        {noData ? <div className="text-center">no data anymore ...</div> : ""}
      </div>
    </div>
  );
}
