import { dbData } from "../";

export interface ICourse {
  id: string;
  name: string;
  description: string;
  tags: string;
  grading: string;
  grade_min: number;
  grade_max: number;
  grade_pass_min: number;
}

export const COURSE_TABLE = "course";

export const CourseTable = () => dbData<ICourse>(COURSE_TABLE);

// -------------------------------------------------------------------------------------
export interface ICourseStats {
  course_taken: string;
  year: number;
  term: number;
  p_group: number;
  n_total: number;
  n_finished: number;
  n_pass: number;
  n_fail: number;
  n_drop: number;
  histogram: string;
  avg_grade: number;
  n_grades: number;
  id: number;
  histogram_labels: string;
  color_bands: string;
}

export const COURSE_STATS_TABLE = "course_stats";

export const CourseStatsTable = () => dbData<ICourseStats>(COURSE_STATS_TABLE);

// -------------------------------------------------------------------------------------

export interface IParameter {
  passing_grade: number;
  loading_date: Date;
}

export const PARAMETER_TABLE = "parameter";

export const ParameterTable = () => dbData<IParameter>(PARAMETER_TABLE);

// -------------------------------------------------------------------------------------

export interface IProgram {
  id: string;
  name: string;
  desc: string;
  tags: string;
  active: boolean;
  last_gpa: number;
  cycle_bachelor_name: string;
  cycle_licentiate_name: string;
  bachelor_start: number;
  bachelor_end: number;
  licentiate_start: number;
  licentiate_end: number;
}

export const PROGRAM_TABLE = "program";

export const ProgramTable = () => dbData<IProgram>(PROGRAM_TABLE);

// -------------------------------------------------------------------------------------

export interface IProgramStructure {
  id: number;
  program_id: string;
  curriculum: string;
  semester: number;
  course_id: string;
  credits: number;
  requisites: string;
  mention: string;
  course_cat: string;
  mode: string;
  credits_sct: number;
  tags: string;
}

export const PROGRAM_STRUCTURE_TABLE = "program_structure";

export const ProgramStructureTable = () =>
  dbData<IProgramStructure>(PROGRAM_STRUCTURE_TABLE);

// -------------------------------------------------------------------------------------

export interface IStudent {
  id: string;
  name: string;
  state: string;
}

export const STUDENT_TABLE = "student";

export const StudentTable = () => dbData<IStudent>(STUDENT_TABLE);

// -------------------------------------------------------------------------------------

export interface IStudentCourse {
  id: number;
  year: number;
  term: number;
  student_id: string;
  course_taken: string;
  course_equiv: string;
  elect_equiv: string;
  registration: string;
  state: string;
  grade: number;
  p_group: number;
  comments: string;
  instructors: string;
  duplicates: number;
}

export const STUDENT_COURSE_TABLE = "student_course";

export const StudentCourseTable = () =>
  dbData<IStudentCourse>(STUDENT_COURSE_TABLE);

// -------------------------------------------------------------------------------------
export interface IStudentDropout {
  student_id: string;
  prob_dropout?: number;
  weight_per_semester?: string;
  active: boolean;
  model_accuracy?: number;
  explanation?: string;
}

export const STUDENT_DROPOUT_TABLE = "student_dropout";

export const StudentDropoutTable = () =>
  dbData<IStudentDropout>(STUDENT_DROPOUT_TABLE);

// -------------------------------------------------------------------------------------
export interface IStudentProgram {
  student_id: string;
  program_id: string;
  curriculum: string;
  start_year: number;
  mention: string;
  last_term: number;
  n_courses: number;
  n_passed_courses: number;
  n_courses_bachelor: number;
  n_passed_courses_bachelor: number;
  n_courses_licentiate: number;
  n_passed_courses_licentiate: number;
  completion: number;
}

export const STUDENT_PROGRAM_TABLE = "student_program";

export const StudentProgramTable = () =>
  dbData<IStudentProgram>(STUDENT_PROGRAM_TABLE);

// -------------------------------------------------------------------------------------

export interface IStudentTerm {
  id: number;
  student_id: string;
  year: number;
  term: number;
  situation: string;
  t_gpa: number;
  c_gpa: number;
  comments: string;
  program_id: string;
  curriculum: string;
  start_year: number;
  mention: string;
}

export const STUDENT_TERM_TABLE = "student_term";

export const StudentTermTable = () => dbData<IStudentTerm>(STUDENT_TERM_TABLE);
// -------------------------------------------------------------------------------------
export interface IStudentEmployed {
  id: string;
  student_id: string;
  employed: boolean;
  institution: string;
  educational_system: string;
  months_to_first_job: number;
  description: string;
}

export const STUDENT_EMPLOYED_TABLE = "student_employed";

export const StudentEmployedTable = () =>
  dbData<IStudentEmployed>(STUDENT_EMPLOYED_TABLE);

// --------------------------------------------------------------------------
export interface IStudentAdmission {
  student_id: string;
  active: boolean;
  type_admission: string;
  initial_test: number;
  final_test?: number;
}

export const STUDENT_ADMISSION_TABLE = "student_admission";

export const StudentAdmissionTable = () =>
  dbData<IStudentAdmission>(STUDENT_ADMISSION_TABLE);
// -------------------------------------------------------------------------------------
export interface IStudentDiagnosticTest {
  id: number;
  year: number;
  term: number;
  student_id: string;
  course_taken: string;
  registration: string;
  state: string;
  grade: number;
  p_group: number;
  comments: string;
  duplicates: number;
}

export const STUDENT_DIAGNOSTIC_TEST_TABLE = "student_diagnostic_test";

export const StudentDiagnosticTestTable = () =>
  dbData<IStudentDiagnosticTest>(STUDENT_DIAGNOSTIC_TEST_TABLE);
// -------------------------------------------------------------------------------------
export interface IDiagnosticTest {
  id: string;
  name: string;
  description: string;
  tags: string;
  grading: string;
  grade_min: number;
  grade_max: number;
  grade_pass_min: number;
}

export const DIAGNOSTIC_TEST_TABLE = "diagnostic_test";

export const DiagnosticTestTable = () =>
  dbData<IDiagnosticTest>(DIAGNOSTIC_TEST_TABLE);
// -------------------------------------------------------------------------------------
export interface IDiagnosticTestStats {
  test_taken: string;
  year: number;
  term: number;
  p_group: number;
  n_total: number;
  n_finished: number;
  n_pass: number;
  n_fail: number;
  n_drop: number;
  histogram: string;
  avg_grade: number;
  id: number;
  histogram_labels: string;
  color_bands: string;
}

export const DIAGNOSTIC_TEST_STATS_TABLE = "diagnostic_test_stats";

export const DiagnosticTestStatsTable = () =>
  dbData<IDiagnosticTestStats>(DIAGNOSTIC_TEST_STATS_TABLE);
// -------------------------------------------------------------------------------------

export interface IPerformanceByLoad {
  id: number;
  program_id: string;
  student_cluster: number;
  courseload_unit: string;
  courseload_lb: number;
  courseload_ub: number;
  hp_value: number;
  mp_value: number;
  lp_value: number;
  message_title: string;
  message_text: string;
  cluster_label: string;
  hp_count?: number;
  mp_count?: number;
  lp_count?: number;
  courseload_label: string;
  n_total?: number;
}

export const PERFORMANCE_BY_LOAD_TABLE = "performance_by_load";

export const PerformanceByLoadTable = () =>
  dbData<IPerformanceByLoad>(PERFORMANCE_BY_LOAD_TABLE);

// -------------------------------------------------------------------------------------

export interface IStudentCluster {
  student_id: string;
  program_id: string;
  cluster: number;
}

export const STUDENT_CLUSTER_TABLE = "student_cluster";

export const StudentClusterTable = () =>
  dbData<IStudentCluster>(STUDENT_CLUSTER_TABLE);
