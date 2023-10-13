import Nanny from 'nanny-state'


const View = state => {
  const decode = event => {
    event.preventDefault()
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const text = event.target.cipherText.value.toUpperCase()
    const possibilities = new Array(26).fill("").map((x,i) => text.split``.map((y,j)=> alphabet.includes(y) ? alphabet[(alphabet.indexOf(y) + i)%26] : y).join``)
    state.Update({plainText: possibilities.filter(x => x.includes("THE") || x.includes("AND")) })
  }
  
  return state.HTML`
  <h1>Caesar Decoder</h1>
  <form autocomplete="off" onsubmit = ${decode}>
      <textarea type='text' name = 'cipherText' id = 'cipherText'></textarea>
      <button> Enter </button>
  </form>
  
  <p id="plainText">
  ${state.plainText}
  </p>
  <footer>
    <p>Another beatifully unconventional <span class="JOG"><span class="J">J</span>O<span class="G">G</span></span> production made with 💜🤍💚 in <a href="https://github.com/daz4126/Nanny-State" title="Nanny State">Nanny State</a>.</p>
  </footer>`
}

const State = {
  plainText: "",
  View
}

Nanny(State)