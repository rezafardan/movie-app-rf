import React from "react";
import Button from "../AtomicComponent/Button";

const InputComponent = () => {
  return (
    <div className="addmovie-container">
      <h2>Edit Movie</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Year:</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />

          <label>Cast:</label>
          <input
            type="text"
            value={cast.join(", ")}
            onChange={(e) =>
              setCast(e.target.value.split(",").map((item) => item.trim()))
            }
            required
          />

          <label>Genres:</label>
          <input
            type="text"
            value={genres.join(", ")}
            onChange={(e) =>
              setGenres(e.target.value.split(",").map((item) => item.trim()))
            }
            required
          />

          <label>Href:</label>
          <input
            type="text"
            value={href}
            onChange={(e) => setHref(e.target.value)}
            required
          />

          <label>Extract:</label>
          <textarea
            type="text"
            value={extract}
            onChange={(e) => setExtract(e.target.value)}
            required
          ></textarea>

          <label>Thumbnail:</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />

          <Button type="submit">Update Movie</Button>
        </form>
      </div>
    </div>
  );
};

export default InputComponent;
