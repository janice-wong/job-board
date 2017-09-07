var Job = React.createClass({
  getInitialState() {
    return {editable: false, location: this.props.job.location}
  },

  handleEdit() {
    if (this.state.editable) {
      var id = this.props.job.id;
      var title = this.refs.title.value;
      var description = this.refs.description.value;
      var location = this.refs.location.value;
      var jobtype = this.refs.jobtype.value;
      var job = {id: id, title: title, description: description, location: location, jobtype: jobtype }
      this.props.handleUpdate(job);
    }
    this.setState({editable: !this.state.editable})
  },

  render() {
    var title = this.state.editable ? <p>Title: <input type='text' ref='title' defaultValue={this.props.job.title} /></p> : <h3> {this.props.job.title}</h3>;
    var location = this.state.editable ? 
      <p>Location:
        <select ref="location" defaultValue={this.state.location} >
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Boston">Boston</option>
        </select>
      </p> 
      : 
      <p><strong>Location:</strong> {this.props.job.location}</p>;
    var jobtype = this.state.editable ? <p>Type: <input type='text' ref='jobtype' defaultValue={this.props.job.jobtype} /></p> : <p><strong>Type:</strong> {this.props.job.jobtype}</p>;
    var description = this.state.editable ? <p>Description: <textarea type='text' ref='description' defaultValue={this.props.job.description}></textarea></p> : <p><i>{this.props.job.description}</i></p>;
    return (
      <div>
        {title}
        {location}
        {jobtype}
        {description}
        <p><button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button></p>
        <p><button onClick={this.props.handleDelete}>Delete</button></p>
      </div>
    )
  }
});