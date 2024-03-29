import PropTypes from 'prop-types';
import React from 'react';
import Bank_of_America_logo from '../images/Bank_of_America_logo.svg';
import Capital_One_logo from '../images/Capital_One_logo.svg';
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>This is an intro, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Career</h2>
          <span className="image main"><img src={Capital_One_logo} alt="" /></span>

          <h3>Software Engineering Manager | </h3><h4>Present</h4>
          <p>I currently work at Capital One as a Software Engineering Manager.  I manage a team of 5 to 7 Junior to Senior engineers using the Agile framework.  My team's primary foucs is to ensure a well managed cloud environment and automate as much as possible in order to make the developer's life as easy as posisble.  We develop APIs, Micro Services and full web based applications using our preferred stack of Python/Flask, Golang, React, AWS DynamoDB, AWS RDS, AWS Lambda, and so much more.</p>
          <p>The team is currently developing a platform built using our preferred stack that will allow develoeprs to manage sensitive AWS services such as S3, IAM, SQS, SNS and implement least privilege policies to keep our data safe.</p>

          <h3>Senior Software Engineer | </h3><h4>Jan 2018 - Jan 2019</h4>
          <p>As a Sr. Software Engineer I was responsible for writing code for various tools and automation.  I was also responsible for managing the implmentation of and policy management of the open sourced <a href="https://cloudcustodian.io/" target="_blank">Cloud Custodian</a>.  Also, in my role, I became a go to person for all thigns Cloud, specifically Amazon AWS</p>

          <h3>Senior_Platform_Engineer == Aug 2017 - Jan 2018</h3>
          <p>I currently work at Capital One as a Software Engineering Manager.  I manage a team of 5 to 7 Junior to Senior engineers using the Agile framework.  My team's primary foucs is to ensure a well managed cloud environment and automate as much as possible in order to make the developer's life as easy as posisble.  We develop APIs, Micro Services and full web based applications using our preferred stack of Python/Flask, Golang, React, AWS DynamoDB, AWS RDS, AWS Lambda, and so much more.</p>
          <p>The team is currently developing a platform built using our preferred stack that will allow develoeprs to manage sensitive AWS services such as S3, IAM, SQS, SNS and implement least privilege policies to keep our data safe.</p>


          <span className="image main"><img src={Bank_of_America_logo} alt="" /></span>
          <p>This is my work Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>This is my work Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>About me?  Isn't this the same as intro, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://github.com/dad2jrn" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main