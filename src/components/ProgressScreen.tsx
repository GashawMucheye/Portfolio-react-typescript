import { motion } from 'framer-motion';
import { Skills } from '../types/Types';
import './progress.css';

const ProgressScreen = ({ skill }: { skill: Skills }) => {
  return (
    <section>
      <div style={{ marginTop: '2em' }}>
        <h2 style={{ color: skill.color }}>{skill.name}</h2>

        <motion.img
          src={skill.img}
          alt="picture"
          width={30}
          style={{ textAlign: 'center' }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9 }}
        />
      </div>

      <div className=" progress_screen">
        {/* red */}
        <motion.div
          className=" h-6 "
          style={{
            width: `${skill.value}%`,
            backgroundColor: skill.color,
            borderRadius: '1em 0 0 1em',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${skill.value}%` }}
          transition={{ duration: 0.5 }}
        >
          <span>{skill.value}%</span>
        </motion.div>
      </div>
    </section>
  );
};
export default ProgressScreen;
