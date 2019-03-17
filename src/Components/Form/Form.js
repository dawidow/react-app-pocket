import React from "react";
import AppContext from "../../context";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const type = {
  sites: "sites",
};

class Form extends React.Component {
  state = {
    type: type.sites,
    title: "",
    link: "",
    image: "",
    description: "",
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

  };

  render() {
    // const { type } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title>Add new site to your pocket</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, this.state)}
            >
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label="Title"
				required
              />
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label="Link"
				  required
                />
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="Image"
                />
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
