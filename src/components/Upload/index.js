import React, { Component } from "react";

import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";

 
export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) =>{
//Mensage para arrastar arquivos    
    if(!isDragActive){
      return<UploadMessage>Arraste seu video pra cá</UploadMessage>
    }
//Mensagem para arquivo não suportado
    if(isDragReject){
      return<UploadMessage type="error">Tipo de arquivo não suportado</UploadMessage>
    }
//Mensagem sucesso e para soltar arquivo
    return <UploadMessage type ="success">Solte os videos aqui</UploadMessage>
  };
  render() {
    const{onUpload} = this.props;
    return(
            //validar tiop arquivo 
            <Dropzone accept ="video/*" onDropAccepted={onUpload}>
              {({ getRootProps, getInputProps, isDragActive, isDragReject }) => 
                <DropContainer
                  {...getRootProps()}
                  isDragActive={isDragActive}
                  isDragReject={isDragReject}
                >
                <input {...getInputProps()} />
                  {this.renderDragMessage(isDragActive, isDragReject)}
                </DropContainer>
              }
            </Dropzone>
    );
  }
}
