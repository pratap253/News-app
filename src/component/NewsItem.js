
import React, { Component } from "react";

export class NewsItem extends Component {
   
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justfyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
          </div>
          <img src={imageUrl?imageUrl:"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1192070239?k=20&m=1192070239&s=612x612&w=0&h=fWrzqshKbKOGLEA_UrYcbrYuhs9sWrKQ4dF8b_f_VG4="} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text">
              <small className="text-muted">By {author?author:"unknown"} on {new Date(publishedAt).toGMTString()}</small>
            </p>
            <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              READ MORE
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
