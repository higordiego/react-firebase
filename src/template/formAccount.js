import React from 'react';

export default props => (
  <div className="container">
    <div className="panel panel-primary">
      <div className="panel-heading text-center">Cadastrar Conta </div>
      <div className="panel-body">
        <div className="col-sm-4">
          <div className="form-group">
            <label>Titulo</label>
            <input type="text" value={props.title} className='form-control'></input>
            <p className="help-block">Ex: Fatura de Cartão</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Dividiu ?</label>
            <select className="form-control" name={props.share}>
              <option value="">A vista</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <p className="help-block">Ex: 2 ou 3 vezes</p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Valor</label>
            <input type="text" className='form-control'></input>
            <p className="help-block">Ex: 150,00 </p>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <label>Vencimento</label>
            <input type="date" className='form-control'></input>
            <p className="help-block">Ex: 21/02/2017 </p>
          </div>
        </div>
        <button type="button" className="btn btn-success btn-block">Salvar</button>
      </div>
    </div>
  </div>
);
