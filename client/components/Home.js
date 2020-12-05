
// eslint-disable-next-line no-undef
const {Image} = ReactBootstrap

import ReactMarkdown from 'react-markdown'

// eslint-disable-next-line no-undef
import Base from './Base'

const markdown = ` ## Introduction
Maybe you don't know it, but any major web service (Twitter, Pinterest, etc.) sends your password to their server in a plain test. Only after, they derivate the password and save it in the database. What happens is a smart employee puts a backdoor at the beginning of the flow and steal your password?

If you ask Twitter, they will tell you that their processes are totally secure. I.e., an employee would never be able to do that without being spotted immediately.

Let me say that I worked in many large companies, and security is not what they would pretend it is. In fact, from time to time, we discover that they do things like saving "accidentally" all the passwords in plain text.

The point is that we cannot trust them, and they should not trust themselves. The solution is to solve the issue in the browser.

## The SignAuth approach

What if you could use your username and password to generate an ED25519 pair of keys and sign a challenge with them?
If you could do this, the server could verify the signature and save in its database your public key.

This is how precisely SignAuth works. Look at the following flow chart:

`

const markdown2 = `

To check how it works, if you are an engineer, you can inspect the network and see the calls that the client makes to the server while you sign up or sign in. Use the commands in the menu at the top right and enjoy it!

## Contributions

My name is Francesco Sullo, and I am fascinated by security and, mostly, how people care little about it.
 I had the idea for SignAuth after a discussion with a friend who works for Pinterest. It put me about 8 hours to write the main library and a day to build a boilerplate to help people implementing SignAuth, starting from myself. In fact, I used the boilerplate as a template for this website. The idea is not new and is similar to how many other protocols work. Still, the concept is quite powerful, and I hope that other developers would like to help me improving the protocol.

For more info, look at the GitHub repos [https://github.com/signauth](https://github.com/signauth)

---

SignAuth is released under a MIT licence. (c) 2020 [Francesco Sullo](https://francesco.sullo.co).

`


export default class Home extends Base {

  render() {
    return (
      <div>
        <h2 className="centered">SignAuth</h2>
        <p className="centered"><i>An authentication protocol to protect your password</i></p>
        <ReactMarkdown children={markdown} />
        <Image src="https://raw.githubusercontent.com/signauth/signauth/master/assets/signauth-flow.png" fluid />
        <ReactMarkdown children={markdown2} />
      </div>
    )
  }
}
