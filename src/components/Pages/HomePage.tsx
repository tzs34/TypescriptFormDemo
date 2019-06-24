import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

const Home: React.FunctionComponent<RouteComponentProps> = () => {
  function submitFormData(e: React.FormEvent<HTMLFormElement>) {}
  return (
    <div>
      <form onSubmit={submitFormData}>
        <label>
          Name:
          <input type="text" ref={input => (this.input = input)} />
        </label>
      </form>
    </div>
  )
}

export default Home
