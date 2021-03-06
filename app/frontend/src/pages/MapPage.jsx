import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Map from '../components/Map'
import CompaniesAPI from '../services/CompaniesAPI'

const MapPage = () => {
  const [companies, setCompanies] = useState([])

  const fetchCompanies = async () => {
    try {
      const companies = await CompaniesAPI.fetchCompanies().then(
        response => response.data.companies
      )
      setCompanies(companies)
    } catch (error) {
      toast.error('Une erreur est survenue ❌')
    }
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <div className="container">
      <h2 className="mt-5 text-center display-3">Map</h2>
      <p className="text-center text-justify px-5 mt-2 lead">
        Retrouvez l'emplacement des revendeurs de masques
      </p>
      <p className="mb-5 text-center">
        <small>
          <strong>Astuce :</strong> Passez votre souris sur un pointeur afin de
          voir le nom du revendeur
        </small>
      </p>
      <Map
        containerElement={<div style={{ height: `500px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
        companies={companies}
      />
    </div>
  )
}

export default MapPage
