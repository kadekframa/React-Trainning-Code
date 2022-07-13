import React, {useState} from 'react';

function FunctionComponent() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [name, setName] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    setName(`${firstname} ${lastname}`);

    setFirstname('');
    setLastname('');
  }

  return(
    <div className='p-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <div className="card">
            <div className="card-header">Learn React Function Component</div>
            <div className="card-body">
              <form onSubmit={submitHandler}>
                <div className="mb-4">
                  <label htmlFor="lastname" className='form-label'>Firstname</label>
                  <input type="text" value={firstname} onChange={event => setFirstname(event.target.value)} name="firstname" id="firstname" className="form-control" />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastname" className='form-label'>Lastname</label>
                  <input type="text" value={lastname} onChange={event => setLastname(event.target.value)} name="lastname" id="lastname" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Show</button>
              </form>
            </div>
            <div className="card-footer">
              My name is {name ? name : '...'}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FunctionComponent;
