var stred = SMap.Coords.fromWGS84(-81, 27.5);
		var mapa = new SMap(JAK.gel("mapa"), stred, 7);
		mapa.addDefaultLayer(SMap.DEF_BASE).enable();
		mapa.addDefaultControls();