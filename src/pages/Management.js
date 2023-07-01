import React, { useRef } from 'react';
import Slider from '../Slider';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, useMap, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import '../EditControlStyles.css';
import L from 'leaflet';

function Management() {
  const position = [50.06826873472211, 19.941218335520045];

  function DrawMap() {
    const featureGroupRef = useRef(null);

    function onCreated(e) {
      const layer = e.layer;
      featureGroupRef.current.addLayer(layer); // Add the created layer to featureGroup
      console.log(layer.toGeoJSON());
    }

    function EditableMap() {
      const map = useMap();
      const featureGroup = L.featureGroup();
      map.on('draw:created', onCreated);
    
      return (
        <EditControl
          position="topright"
          onCreated={onCreated}
          draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            polyline: false,
            marker: false,
          }}
          style={{
            zIndex: 1000, // Dodaj wyższy poziom z-index
          }}
        />
      );
    }

    return (
      <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors"
        />
        <FeatureGroup ref={featureGroupRef}>
          <EditableMap />
        </FeatureGroup>
      </MapContainer>
    );
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <div className="header-left">
            <img src="../logo.jpg" alt="Logo" />
            <h1>AgroManager</h1>
          </div>
          <div className="slider-container">
            <Slider />
          </div>
          <div className="header-right">
            <p>You are logged as: <br />Username</p>
          </div>
        </header>

        <div className="container">
          <div className="items">
            <div className="items-head">
              <p>Modules</p>
              <hr />
            </div>
            <div className="items-body">
              <div className="items-body-content">
                <Link to="/"><p>Dashboard</p></Link>
              </div>
              <div className="items-body-content">
                <Link to="/management"><p>Management</p></Link>
              </div>
              <div className="items-body-content">
                <Link to="/budget"><p>Budget</p></Link>
              </div>
              <div className="items-body-content">
                <Link to="/machines"><p>Machines</p></Link>
              </div>
              <div className="items-body-content">
                <Link to="/warehouses"><p>Warehouses</p></Link>
              </div>
            </div>
          </div>

          <main>
            <div className="items-head">
              <p>Dashboard</p>
              <span className='items-desc'>Take charge of your farm operations by implementing efficient management practices, enabling you to optimize productivity and maximize profitability. </span>
              <hr />
            </div>
            <div className="grid-container">
                <DrawMap />
            </div>
          </main>
        </div>

        <footer className="App-footer">
          <div className="footer-left">
            <div className="footer-links">
              <Link to="/login"><p>Podstrona login</p></Link>
              <a href="#">Link 2</a>
            </div>
          </div>
          <p className="footer-text">© 2023 Dekodery. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Management;
