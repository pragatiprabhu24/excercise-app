import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { fetchData, options, youtubeoptions } from '../utils/fetchData';

const ExcerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, options);
      setExerciseDetail(exerciseDetailData);


      localStorage.setItem('exerciseDetail', JSON.stringify(exerciseDetailData));

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeoptions);
      setExerciseVideos(exerciseVideosData.contents);


      localStorage.setItem('exerciseVideos', JSON.stringify(exerciseVideosData.contents));

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options);
      setTargetMuscleExercises(targetMuscleExercisesData);


      localStorage.setItem('targetMuscleExercises', JSON.stringify(targetMuscleExercisesData));

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, options);
      setEquipmentExercises(equipmentExercisesData);

      localStorage.setItem('equipmentMuscleExercises', JSON.stringify(targetMuscleExercisesData));
    };

    fetchExerciseData();
  }, [id]);


  useEffect(() => {
    const storedExerciseDetail = localStorage.getItem('exerciseDetail');
    if (storedExerciseDetail) {
      setExerciseDetail(JSON.parse(storedExerciseDetail));
    }

    const storedExerciseVideos = localStorage.getItem('exerciseVideos');
    if (storedExerciseVideos) {
      setExerciseVideos(JSON.parse(storedExerciseVideos));
    }

    const storedTargetMuscleExercises = localStorage.getItem('targetMuscleExercises');
    if (storedTargetMuscleExercises) {
      setTargetMuscleExercises(JSON.parse(storedTargetMuscleExercises));
    }

    const storedEquipmentMuscleExercises = localStorage.getItem('targetMuscleExercises');
    if (storedEquipmentMuscleExercises) {
      setTargetMuscleExercises(JSON.parse(storedEquipmentMuscleExercises));
    }
  }, []);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExcerciseDetail;
