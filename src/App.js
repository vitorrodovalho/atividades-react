import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id: 1,
    descricao: 'Primeira Atividade',
  },
  {
    id: 2,
    descricao: 'Segunda Atividade',
  }
];

function App() {
  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e){
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    }
    setAtividades([...atividades, {...atividade}]);
  }

  return (
    <>
      <form className='row g-3'>
        <div className="col-md-6">
          <label for="id" className="form-label">ID</label>
          <input type="text" className="form-control" id="id" />
        </div>

        <div className="col-md-6">
          <label for="descricao" className="form-label">Descricao</label>
          <input type="text" className="form-control" id="descricao" />
        </div>
        <hr />
        <div className='col-12'>
          <button className="btn btn-outline-secondary" onClick={addAtividade}>+ Atividade</button>
        </div>
      </form>
      <div className="mt-3">
          {atividades.map(ativ => (
            <div key={ativ.id} className="card mb-2 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h5 className='card-title'>
                    <span className="badge bg-secondary rounded-pill text-bg-primary me-1">
                      {ativ.id}
                    </span>
                    - título
                  </h5>
                  <h6>
                    Prioridade: Normal
                  </h6>
                </div>
                <p className="card-text">{ativ.descricao}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
