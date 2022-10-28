import * as React from "react";
import { CardCursos } from "../../Components/CardCursos";
import { Header } from "../../Components/Header";

export default function AdminDashboard() {
  return (
    <div>
      <Header name="Administrador" />
      <CardCursos />
    </div>
    );
}