{secretCount.map((value, index) => {
    return value.id === curId.id ? (
      <div key={index}>
        {value.secret.map((x, index) => {
          return (
            <div key={index} className="secretList">
              <div className="secretName">
                <div className="folderIcon">
                  <img
                    className="folderPink"
                    src={IconFolder}
                    alt=""
                  />
                </div>
                <div className="secretDetails">
                  <p>{x}</p>
                  <span id="lastUpdated">Last Updated: a few seconds ago</span>
                </div>
              </div>
              <div className="remove">
                <img
                  src={deleteImage}
                  className="delete_button"
                  alt="delete"
                  onClick={() =>
                    dispatch(
                      deleteSecret({
                        id: x,
                      })
                    )
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      ""
    );
  })}